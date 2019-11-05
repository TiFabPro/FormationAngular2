import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public title = 'Chloe\'s app';
  // public title2: string;
  // public title3: string;

  constructor() {
    // this.title2 = 'test titre';
  }

  ngOnInit() {
    // this.title3 = 'Nouveau titre 3';
  }

}
