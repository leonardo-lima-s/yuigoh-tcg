import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { CardFilter } from 'src/app/core/entities/cards/card-filter';
import { ATTRBUTE_CARD, CARD_TYPE, FRAME_CARD, RACE_CARD } from 'src/app/core/entities/cards/card.constants';
import { CardsService } from 'src/app/core/entities/cards/cards.service';
import MIRROR_FORCE from 'mock/mirror_force.json';
import { CardDetailsComponent } from './components/card-details.component';

@Component({
	selector: 'app-main',
	templateUrl: './list-cards.component.html',
	styleUrls: ['./list-cards.component.scss'],
})
export class ListCardsComponent implements OnInit {
	public cards: any = [];
	public columns: any = [];
	public loading = false;
	public first = 0;
	public rows = 10;
	public formGroup!: FormGroup;
	public types: any = [];
	public races: any = [];
	public frames: any = [];
	public attributes: any = [];
	public selectedCards: any = [];

	@ViewChild(CardDetailsComponent, { static: true }) cardDetailsDialog!: CardDetailsComponent;

	constructor(
		private readonly cardService: CardsService,
		private formBuilder: FormBuilder,
		private readonly messageService: MessageService
	) {
		this.columns = [
			{ field: 'name', header: 'Name' },
			{ field: 'type', header: 'Type' },
			{ field: 'desc', header: 'Description' },
			{ field: 'atk', header: 'Atack' },
			{ field: 'def', header: 'Defense' },
			{ field: 'level', header: 'Level' },
			{ field: 'race', header: 'Type' },
			{ field: 'attribute', header: 'Attribute' },
			{ field: 'view', header: 'More info' },
		];
	}

	ngOnInit() {
		this.setArrays();
		this.setFormGroup();
		this.listCards();
	}

	public listCards() {
		this.loading = true;
		const { name, type, desc, atk, def, level, race, frame, attribute } = this.formGroup.getRawValue();
		const cardFilter: CardFilter = {
			name,
			type: type.name,
			frameType: frame.name,
			desc,
			atk,
			def,
			race: race.name?.toLowerCase() || '',
			attribute: attribute.name?.toUpperCase() || '',
			level,
		};

		this.cardService.getCardList(cardFilter).subscribe({
			next: (response: any) => {
				this.cards = response.data || MIRROR_FORCE;
				this.loading = false;
			},
			error: (e) => {
				const { error } = e.error;
				console.error(error);
				this.messageService.add({
					severity: 'error',
					summary: 'Error',
					detail: error,
					sticky: true,
				});
				this.loading = false;
			},
		});
	}

	next() {
		this.first = this.first + this.rows;
	}

	prev() {
		this.first = this.first - this.rows;
	}

	reset() {
		this.first = 0;
	}

	isLastPage(): boolean {
		return this.cards ? this.first === this.cards.length - this.rows : true;
	}

	isFirstPage(): boolean {
		return this.cards ? this.first === 0 : true;
	}

	private setFormGroup() {
		this.formGroup = this.formBuilder.group({
			name: new FormControl(''),
			type: new FormControl(''),
			desc: new FormControl(''),
			atk: new FormControl(''),
			def: new FormControl(''),
			level: new FormControl(''),
			race: new FormControl(''),
			attribute: new FormControl(''),
			frame: new FormControl(''),
		});
	}

	private setArrays() {
		this.types = Object.entries(CARD_TYPE).map((e) => ({ name: e[1] }));
		this.races = Object.entries(RACE_CARD).map((e) => ({ name: e[1] }));
		this.frames = Object.entries(FRAME_CARD).map((e) => ({ name: e[1] }));
		this.attributes = Object.entries(ATTRBUTE_CARD).map((e) => ({
			name: e[1],
		}));
	}

	public onClearFilters() {
		this.setFormGroup();
		this.listCards();
	}

	public onShowDialog(card: any) {
		this.cardDetailsDialog.isLoading = true;
		this.cardDetailsDialog.card.card_images = card.card_images;
		this.cardDetailsDialog.card.name = card.name;
		this.cardDetailsDialog.onShow();
	}

	public setCardDetails(card: any) {}
}
