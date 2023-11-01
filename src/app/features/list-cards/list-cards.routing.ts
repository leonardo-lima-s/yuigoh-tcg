import { Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCardsComponent } from './view/list-cards.component';

@Injectable()
export class MainRoutingTitleResolve {
  public resolve() {
    return 'Yu-Gi-Oh TCG';
  }
}

export const routes: Routes = [
  {
    path: 'main',
    component: ListCardsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [MainRoutingTitleResolve]
})
export class MainRouting {}
