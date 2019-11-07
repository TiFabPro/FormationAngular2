import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-add-prestation',
  templateUrl: './page-add-prestation.component.html',
  styleUrls: ['./page-add-prestation.component.scss']
})
export class PageAddPrestationComponent implements OnInit {

  public title: string;
  public label: string;

  constructor(
    private prestationService: PrestationsService,
    private route: ActivatedRoute
  ) {  }

  ngOnInit() {
    this.title = 'Ajouter un presta';
    this.label = 'ceci est mon label presta';
  }

}
