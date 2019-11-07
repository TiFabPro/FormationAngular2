import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-boutton',
  templateUrl: './boutton.component.html',
  styleUrls: ['./boutton.component.scss']
})
export class BouttonComponent implements OnInit {

  @Input() href: string;
  @Input() route: string;
  @Input() label: string;


  constructor() { }

  ngOnInit() {
  }

}
