import { Component, OnInit } from '@angular/core';
import { PetitChatService } from 'src/app/shared/services/petit-chat.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public title = 'Chloe\'s app';
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

}
