import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-card-details',
	templateUrl: './card-details.component.html',
	styleUrls: ['./card-details.component.scss'],
})
export class CardDetailsComponent implements OnInit {
	public card: any = { name: '' };
	public show = false;
	public responsiveOptions: any[] = [];
	public isLoading = false;
	public maximized = false;
	public columns: any[] = [];
	public columnsRowExpansion: any[] = [];

	constructor() {
		this.columns = [{ header: 'Set name', field: 'set_name' }];
		this.columnsRowExpansion = [
			{ header: 'Set code', field: 'set_code' },
			{ header: 'Set rarity', field: 'set_rarity' },
			{ header: 'Set rarity code', field: 'set_rarity_code' },
			{ header: 'Set price', field: 'set_price' },
		];
	}

	public ngOnInit(): void {
		this.responsiveOptions = [
			{
				breakpoint: '1024px',
				numVisible: 5,
			},
			{
				breakpoint: '768px',
				numVisible: 3,
			},
			{
				breakpoint: '560px',
				numVisible: 1,
			},
		];
	}

	public onShow() {
		this.show = true;
		this.isLoading = false;
	}

	public onHide() {
		this.show = false;
		this.resetCard();
	}

	public resetCard() {
		this.card = { name: '' };
		this.maximized = false;
	}

	onMaximize(event: any) {
		this.maximized = event.maximized;
	}

	getGridCol(isAcordion = false) {
		if (isAcordion) return 'col-8';

		return this.maximized ? 'col-4' : 'col-12';
	}
}
