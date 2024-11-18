import { Component } from '@angular/core';
import { Overall } from '../../models/Overall';
import { DataService } from '../../services/data-service.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-data-display',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './data-display.component.html',
  styleUrl: './data-display.component.scss'
})
export class DataDisplayComponent {
  factions: { name: string; power: number }[] = [];
  playersTable: { name: string; factionName: string; factionPrestige: number; battles: number }[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // Subscribe to get factions
    this.dataService.getSortedFactions().subscribe(
      (factions) => {
        this.factions = factions;
      },
      (error) => {
        console.error('Error fetching factions:', error);
      }
    );

    // Subscribe to get overall and process players table
    this.dataService.getOverallData().subscribe(
      (overall) => {
        this.playersTable = this.dataService.getPlayersTable(overall);
      },
      (error) => {
        console.error('Error fetching overall data:', error);
      }
    );
  }
}
