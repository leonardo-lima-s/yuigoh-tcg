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
	}
}
