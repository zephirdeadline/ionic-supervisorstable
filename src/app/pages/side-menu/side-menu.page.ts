import { Component, OnInit } from '@angular/core';
import {Router, RouterEvent} from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.page.html',
  styleUrls: ['./side-menu.page.scss'],
})
export class SideMenuPage implements OnInit {

  selectedPath = '';

  pages = [
    {
      title: 'Domains',
      url: '/side-menu/domains-list'
    },
    {
      title: 'About',
      url: '/side-menu/about'
    },
    {
      title: 'Settings',
      url: '/side-menu/settings'
    }
  ];

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }

  ngOnInit() {
  }

}
