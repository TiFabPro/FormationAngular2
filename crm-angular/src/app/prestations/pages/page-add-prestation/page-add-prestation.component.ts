import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Prestation } from 'src/app/shared/models/prestation';

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
    private route: ActivatedRoute,
    private router: Router
  ) {  }

  ngOnInit() {
    this.title = 'Ajouter un presta';
    this.label = 'ceci est mon label presta';
  }

  public add(item: any) {
    this.prestationService.add(item).then( (res) => {
    // res étant la réponse de l'api
    // this.router.navigate(['prestations']);
    // redirection relative par rapport à la route sur laquelle on est
    this.router.navigate(['../'], {relativeTo: this.route});
  });
}

}
