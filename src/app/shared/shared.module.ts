import { MessagesModule } from 'primeng/messages';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';
import { DialogModule } from 'primeng/dialog';
import { GalleriaModule } from 'primeng/galleria';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AccordionModule } from 'primeng/accordion';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
	exports: [
		FormsModule,
		ReactiveFormsModule,
		TableModule,
		PanelModule,
		ButtonModule,
		InputTextModule,
		MessagesModule,
		DropdownModule,
		RatingModule,
		DialogModule,
		GalleriaModule,
		ProgressSpinnerModule,
		AccordionModule,
		TabViewModule,
	],
})
export class SharedModule {}
