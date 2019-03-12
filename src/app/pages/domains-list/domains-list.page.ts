import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-domains-list',
  templateUrl: './domains-list.page.html',
  styleUrls: ['./domains-list.page.scss'],
})
export class DomainsListPage implements OnInit {
  domains = [
    {
      name: 'Quiz Engine',
      status: 'Ok'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
