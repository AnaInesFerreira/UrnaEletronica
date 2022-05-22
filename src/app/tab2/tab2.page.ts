import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  candidates = [
    {
      name: 'Maria Eduarda',
      electoralParty: 'MDB',
      vice: 'Evelyn Oliveira',
      numberId: 123
    },
    {
      name: 'Julio Macedo',
      electoralParty: 'PT',
      vice: 'Evan Marques',
      numberId: 272
    },
    {
      name: 'Ana Ines',
      electoralParty: 'PTS',
      vice: 'Jeff trouxa',
      numberId: 698
    },
    {
      name: 'Kyu Hayato',
      electoralParty: 'KHT',
      vice: 'Kyu San',
      numberId: 767
    },
  ];
  constructor() {}

}
