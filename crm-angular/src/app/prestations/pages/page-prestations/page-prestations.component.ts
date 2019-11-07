import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared/models/prestation';
import { State } from 'src/app/shared/enums/state.enum';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss'],
  // Permet de pouvoir utiliser plusieurs instances du service
  providers: [PrestationsService]
})

export class PagePrestationsComponent implements OnInit {

  public collection$: Observable<Prestation[]>;
  // public collection: Prestation[];
  public headers: string[];
  public states = State;
  public title: string;
  public label: string;
  public labelbouton: string;
  public routeBtn: string;
  sub: Subscription;

  // Verion antérieure angular6 cela a l'avantage de ne pas trier la liste d'enum
  // public State = Object.values(State);


  constructor(
    private prestationService: PrestationsService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    // this.sub = this.prestationService.collection.subscribe((data) => {
    //   this.collection = data;
    // });
    this.collection$ = this.prestationService.collection;
    this.headers = [ 'Client',  'Type',  'NbJours',  'TjmHT',  'Total',  'Total TTC',  'State'];
    this.labelbouton = 'Ajouter un Prestataire';
    this.routeBtn = 'add';



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

  // ngOnDestroy() {
  //   this.sub.unsubscribe();
  // }


}
