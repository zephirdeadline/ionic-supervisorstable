import { Component, OnInit } from '@angular/core';
import {NetworkService} from '../../services/network/network.service';

@Component({
  selector: 'app-domains-list',
  templateUrl: './domains-list.page.html',
  styleUrls: ['./domains-list.page.scss'],
})
export class DomainsListPage implements OnInit {
  domains = [
    {
      name: 'Quiz Engine back',
      url: 'https://quizengine.w4pity.fr/api/quiz/last/',
      status: ''
    },
    {
      name: 'Quiz Engine front',
      url: 'https://quiz.w4pity.fr/',
      status: ''
    },
    {
      name: 'Documentation',
      url: 'https://documentation.w4pity.fr/',
      status: ''
    },
    {
      name: 'W4pity',
      url: 'https://w4pity.fr/',
      status: ''
    },
    {
      name: 'SupervisorStable',
      url: 'https://supervisor.w4pity.fr/',
      status: ''
    }
  ];
  constructor(private networkService: NetworkService) { }

  ngOnInit() {
    this.domains.forEach(d => {
      this.networkService.ping(d);
    });
  }

}
