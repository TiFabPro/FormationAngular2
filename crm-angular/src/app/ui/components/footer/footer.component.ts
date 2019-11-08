import { Component, OnInit } from '@angular/core';
import { PetitChatService } from 'src/app/shared/services/petit-chat.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public version: number;
  // public title2: string;
  // public title3: string;

  constructor(
    private pcs: PetitChatService
  ) {
    // this.title2 = 'test titre';
  }

  ngOnInit() {
    this.version = this.pcs.version;
    // this.title3 = 'Nouveau titre 3';
  }

}
