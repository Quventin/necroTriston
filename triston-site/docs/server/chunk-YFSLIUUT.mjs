import './polyfills.server.mjs';
import{A as I,B as P,E as O,K as E,a as u,b,c as v,d as c,e as s,f as x,g,h,i as o,j as r,k as w,l as a,m as p,n as d,u as C,w as y,x as S,y as F,z as D}from"./chunk-3747U265.mjs";var _=(()=>{class i{constructor(t){this.http=t,this.jsonFilePath="/assets/json/source.json"}getOverallData(){return this.http.get(this.jsonFilePath).pipe(u(t=>t))}getSortedFactions(){return this.getOverallData().pipe(u(t=>[...t.playerFactions.filter(n=>n.playerIds.length!==0),...t.mifac.filter(n=>n.name==="Slave Guild")].map(n=>({name:n.name==="Slave Guild"?"Genestealer Cult":n.name,power:n.power??0})).sort((n,m)=>m.power-n.power)))}getPlayersTable(t){return t.players.map(e=>{let n=e.isChaos||e.isGsc?e.relationshipWithMifac.find(l=>l.factionId===e.houseId):e.relationshipWithPF.find(l=>l.factionId===e.houseId),m=e.isChaos||e.isGsc?t.mifac.find(l=>l.id===e.houseId):t.playerFactions.find(l=>l.id===e.houseId);return{name:e.name,factionName:m?m.name==="Slave Guild"?"Genestealer Cult":m.name:"Unknown",factionPrestige:n?n.relationship:0,battles:e.battles}}).sort((e,n)=>n.factionPrestige-e.factionPrestige)}static{this.\u0275fac=function(e){return new(e||i)(v(F))}}static{this.\u0275prov=b({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();function H(i,f){if(i&1&&(o(0,"li",8)(1,"span",9),a(2),r(),o(3,"span",10),a(4),r()()),i&2){let t=f.$implicit;s(2),p(t.name),s(2),p(t.power)}}function R(i,f){if(i&1&&(o(0,"tr",11)(1,"td",12),a(2),r(),o(3,"td",12),a(4),r(),o(5,"td",12),a(6),r(),o(7,"td",12),a(8),r()()),i&2){let t=f.$implicit;s(2),p(t.name),s(2),p(t.factionName),s(2),p(t.factionPrestige),s(2),p(t.battles)}}var j=(()=>{class i{constructor(t){this.dataService=t,this.factions=[],this.playersTable=[]}ngOnInit(){this.dataService.getSortedFactions().subscribe(t=>{this.factions=t},t=>{console.error("Error fetching factions:",t)}),this.dataService.getOverallData().subscribe(t=>{this.playersTable=this.dataService.getPlayersTable(t)},t=>{console.error("Error fetching overall data:",t)})}static{this.\u0275fac=function(e){return new(e||i)(x(_))}}static{this.\u0275cmp=c({type:i,selectors:[["app-data-display"]],standalone:!0,features:[d],decls:21,vars:2,consts:[[1,"factions-list","bg-industrial-dark","text-white","p-4"],[1,"text-industrial-metal","text-xl","font-bold","mb-4"],["class","p-2 border-b border-industrial-metal flex justify-between",4,"ngFor","ngForOf"],[1,"players-table","bg-industrial-dark","text-white","p-4","mt-8"],[1,"w-full","border-collapse"],[1,"bg-industrial-light","text-industrial-metal"],[1,"p-2","text-left"],["class","border-b border-industrial-metal hover:bg-industrial-light",4,"ngFor","ngForOf"],[1,"p-2","border-b","border-industrial-metal","flex","justify-between"],[1,"name","font-semibold"],[1,"power","text-industrial-rust"],[1,"border-b","border-industrial-metal","hover:bg-industrial-light"],[1,"p-2"]],template:function(e,n){e&1&&(o(0,"div",0)(1,"h2",1),a(2,"Factions"),r(),o(3,"ul"),g(4,H,5,2,"li",2),r()(),o(5,"div",3)(6,"h2",1),a(7,"Players Table"),r(),o(8,"table",4)(9,"thead")(10,"tr",5)(11,"th",6),a(12,"Name"),r(),o(13,"th",6),a(14,"Faction Name"),r(),o(15,"th",6),a(16,"Faction Prestige"),r(),o(17,"th",6),a(18,"Battles"),r()()(),o(19,"tbody"),g(20,R,9,4,"tr",7),r()()()),e&2&&(s(4),h("ngForOf",n.factions),s(16),h("ngForOf",n.playersTable))},dependencies:[S,y],styles:[".factions-list[_ngcontent-%COMP%]{border-radius:.5rem;--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.factions-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none}.factions-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:.5rem}.factions-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{cursor:pointer;--tw-bg-opacity: 1;background-color:rgb(58 58 58 / var(--tw-bg-opacity, 1))}"]})}}return i})();var T=(()=>{class i{constructor(){this.title="triston-site"}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=c({type:i,selectors:[["app-root"]],standalone:!0,features:[d],decls:1,vars:0,template:function(e,n){e&1&&w(0,"app-data-display")},dependencies:[j]})}}return i})();var G=[];var N={providers:[D(),E(G),P()]};var W={providers:[O()]},k=C(N,W);var $=()=>I(T,k),pt=$;export{pt as a};