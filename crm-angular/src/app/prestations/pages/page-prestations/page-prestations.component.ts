import { Component, OnInit, Input } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared/models/prestation';
import { State } from 'src/app/shared/enums/state.enum';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss'],
  // Permet de pouvoir utiliser plusieurs instances du service
  providers: [PrestationsService]
})
export class PagePrestationsComponent implements OnInit {
  public collection: Prestation[];
  public headers: string[];
  public states = State;
  public title: string;
  public label: string;

  // Verion antérieure angular6 cela a l'avantage de ne pas trier la liste d'enum
  // public State = Object.values(State);


  constructor(
    private prestationService: PrestationsService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.collection = this.prestationService.collection;
    this.headers = [ 'Client',  'Type',  'NbJours',  'TjmHT',  'Total',  'Total TTC',  'State'];

    // Récupération des datas de l'oberveur
    this.route.data.subscribe((donnees) => {
      console.log(donnees);
      this.title = donnees.title;
      this.label = donnees.label;
    });
    console.log(this.route);
    console.log(this.prestationService.collection);
  }

  public update(item: any, event: any) {
    // console.log(event.target.value);
    this.prestationService.update(item, event.target.value);

  }

}
