import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  candidates = [
    {
      name: 'Maria Eduarda',
      electoralParty: 'MDB',
      vice: 'Evelyn Oliveira',
      numberId: 123,
    },
    {
      name: 'Julio Macedo',
      electoralParty: 'PT',
      vice: 'Evan Marques',
      numberId: 272,
    },
    {
      name: 'Ana Ines',
      electoralParty: 'PTS',
      vice: 'Jeff trouxa',
      numberId: 698,
    },
    {
      name: 'Kyu Hayato',
      electoralParty: 'KHT',
      vice: 'Kyu San',
      numberId: 767,
    },
  ];
  candidatesView = this.candidates;
  candidate;
  totalVotes = 0;
  candidateOne = 0;
  candidateTwo = 0;
  candidateThree = 0;
  candidateFour = 0;
  candidateOnePct = 0;
  candidateTwoPct = 0;
  candidateThreePct = 0;
  candidateFourPct = 0;

  constructor() {}

  filterCandidate(value: string) {
    if (value === '' || value.length < 3) {
      this.candidatesView = this.candidates;
    } else {
      this.candidatesView = this.candidates.filter(
        (item) => item.numberId === Number(value)
      );
      this.candidate = this.candidatesView;
      console.log('aqui', this.candidatesView);
    }
  }
  toCorrect() {
    this.candidatesView = [];
    this.candidate = [];
    console.log('toma', this.candidate);
  }

  submitElection() {
    this.totalVotes++;
    if (this.candidate[0].numberId === 123) {
      this.candidateOne++;
      this.candidateOnePct = (this.candidateOne * 100) / this.totalVotes;
    } else if (this.candidate[0].numberId === 272) {
      this.candidateTwo++;
      this.candidateTwoPct = (this.candidateTwo * 100) / this.totalVotes;
    } else if (this.candidate[0].numberId === 698) {
      this.candidateThree++;
      this.candidateThreePct = (this.candidateThree * 100) / this.totalVotes;
    } else if (this.candidate[0].numberId === 767) {
      this.candidateFour++;
      this.candidateFourPct = (this.candidateFour * 100) / this.totalVotes;
    }
  }
}
