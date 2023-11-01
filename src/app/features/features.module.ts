import { NgModule } from '@angular/core';
import { ListCardsModule } from './list-cards/list-cards.module';

@NgModule({
  imports: [ListCardsModule],
  exports: [ListCardsModule],
})
export class FeaturesModule {}
