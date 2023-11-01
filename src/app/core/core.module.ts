import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CardsService } from './entities/cards/cards.service';
@NgModule({
  imports: [HttpClientModule],
  providers: [CardsService],
})
export class CoreModule {}
