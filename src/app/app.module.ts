import { ToastModule } from 'primeng/toast';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeaturesModule } from './features/features.module';
import { CoreModule } from './core/core.module';
import { MessageService } from 'primeng/api';
import { StyleClassModule } from 'primeng/styleclass';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FeaturesModule,
    RouterModule,
    CoreModule,
    ToastModule,
    StyleClassModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
