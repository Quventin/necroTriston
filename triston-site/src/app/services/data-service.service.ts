import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Overall } from '../models/Overall'; // Adjust the import path as per your project structure

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly jsonFilePath = '/assets/json/source.json';

  constructor(private http: HttpClient) {}

  /**
   * Fetches data from the JSON file, parses it into an Overall object, and returns it.
   * @returns {Observable<Overall>} Parsed Overall object.
   */
  getOverallData(): Observable<Overall> {
    return this.http.get<Overall>(this.jsonFilePath).pipe(
      map((data) => {
        // Transform or validate data if necessary
        const overall = data as Overall;

        return overall;
      })
    );
  }

  getSortedFactions(): Observable<{ name: string; power: number }[]> {
    return this.getOverallData().pipe(
      map((overall) => {
        const factions = [
          ...overall.playerFactions.filter((x) => x.playerIds.length !== 0),
          ...overall.mifac.filter((mifac) => mifac.name === 'Slave Guild'),
        ];
        return factions
          .map((faction) => ({
            name: faction.name === 'Slave Guild' ? 'Genestealer Cult' : faction.name, // Replace name
            power: faction.power ?? 0, // Default power if undefined
          }))
          .sort((a, b) => b.power - a.power); // Descending order
      })
    );
  }

  getPlayersTable(overall: Overall): { name: string; factionName: string; factionPrestige: number; battles: number }[] {
    return overall.players.map((player) => {
      // Match relationshipWithPF or relationshipWithMifac
      const relationship = (player.isChaos || player.isGsc) ?
      player.relationshipWithMifac.find((f) => f.factionId === player.houseId) :
      player.relationshipWithPF.find((f) => f.factionId === player.houseId )
        
  
      // Find the matching faction
      const faction =
      (player.isChaos || player.isGsc) ?
      overall.mifac.find((f) => f.id === player.houseId) :
      overall.playerFactions.find((f) => f.id === player.houseId )
  
      return {
        name: player.name,
        factionName: faction ? faction.name === 'Slave Guild' ? 'Genestealer Cult' : faction.name : 'Unknown',
        factionPrestige: relationship ? relationship.relationship : 0,
        battles: player.battles,
      };
    }).sort((a, b) => b.factionPrestige - a.factionPrestige);
  }
  
}
