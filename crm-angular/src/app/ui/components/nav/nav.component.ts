import { Component, OnInit } from '@angular/core';
import { PetitChatService } from 'src/app/shared/services/petit-chat.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public version$: BehaviorSubject<number>;
  // public title2: string;
  // public title3: string;

  constructor(
    private pcs: PetitChatService
  ) {
    // this.title2 = 'test titre';
  }

  ngOnInit() {
    this.version$ = this.pcs.version$;
    // this.title3 = 'Nouveau titre 3';
  }

  upgradeVersion() {
    this.pcs.upgrade();
  }
}
