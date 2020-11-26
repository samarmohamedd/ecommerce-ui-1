import { Component, ElementRef, ViewChild } from '@angular/core';

import { NavItem } from '../../../Interfaces/NavItem';
import { NavService } from 'src/app/Services/nav.service';
import { VERSION } from '@angular/material/core';

@Component({
  selector: 'root-nav',
  templateUrl: './root-nav.component.html',
  styleUrls: ['./root-nav.component.css']
})
export class RootNavComponent {
  @ViewChild('appDrawer') appDrawer: ElementRef | undefined;
  version = VERSION;
  public listaItems: any[] = [
    { name: 'Home', url: '/Home', icon: 'home' },
    { name: 'Category', url: '/Category', icon: 'home' },
    { name: 'Brand', url: '/Brand', icon: 'home' },
    { name: 'Vendor', url: '/Vendor', icon: 'home' },
    { name: 'Product', url: '/Product', icon: 'home' },
    { name: 'Stock Items', url: '/StockItems', icon: 'home' },
    { name: 'Stock', url: '/Stock', icon: 'home' },

  ];

  navItems: NavItem[] = [
    {
      displayName: 'Home',
      iconName: 'home',
      route: '/Home',
      children: []
    },
    {
      displayName: 'Information',
      iconName: 'recent_actors',
      children: [
        {
          displayName: 'Category',
          iconName: 'group',
          route: '/Category',
          children: []
        },
        {
          displayName: 'Brand',
          iconName: 'group',
          route: '/Brand',
          children: []
        }, {
          displayName: 'Product',
          iconName: 'group',
          route: '/Product',
          children: []
        },
      ]
    },
    {
      displayName: 'Stocks',
      iconName: 'recent_actors',
      children: [
        {
          displayName: 'Vendor',
          iconName: 'group',
          route: '/Vendor',
          children: []
        },
        {
          displayName: 'Stock',
          iconName: 'Stock',
          route: '/Stock',
          children: []
        }, {
          displayName: 'StockItems',
          iconName: 'group',
          route: '/StockItems',
          children: []
        },
      ]
    },


  ];


  constructor(private navService: NavService) { }
  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }

}