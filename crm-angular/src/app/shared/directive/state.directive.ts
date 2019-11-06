import { Directive, Input, OnInit, HostBinding, OnChanges } from '@angular/core';
import { State } from '../enums/state.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: State;
  @HostBinding('class') hostAttr: string;

  constructor() {
  }

  ngOnChanges() {
    console.log(this.appState);
    this.hostAttr = this.formatClass(this.appState);
  }

  private formatClass(state: any): string {
    return `state-${state.normalize('NFD').replace(/[\u0300-\u036f\s]/g, '').toLowerCase()}`;
  }

}

// appState vaut annule => state-annule
// appState vaut Option => state-option
// appState vaut Confirmé => state-confirme
// On veut binder l'attribut class du host element td avec ce string
