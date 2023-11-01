import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRouting } from './list-cards.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListCardsComponent } from './view/list-cards.component';
import { CardDetailsComponent } from './view/components/card-details.component';

@NgModule({
  declarations: [ListCardsComponent, CardDetailsComponent],
  imports: [CommonModule, MainRouting, SharedModule],
  exports: [ListCardsComponent],
})
export class ListCardsModule {}
