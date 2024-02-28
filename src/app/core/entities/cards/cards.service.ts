import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CardFilter } from './card-filter';

const DEFAULT_URL = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';

@Injectable()
export class CardsService {
	constructor(protected http: HttpClient) {}

	public getCardList(filter?: CardFilter, language = 'en') {
		const filterUrl = this.getUrlFilter(filter);
		let url = DEFAULT_URL;
		if (language !== 'en') {
			url = filterUrl ? `${url}?language${language}&${filterUrl}` : `${url}?language=${language}`;
		} else {
			url = filterUrl ? `${url}?${filterUrl}` : url;
		}

		return this.http.get(url);
	}

	private getUrlFilter(filter: any) {
		if (!filter) return;

		let filterUrl = '';
		Object.keys(filter).forEach((key: string) => {
			if (filter[key]) {
				filterUrl = filterUrl ? `${filterUrl}&${key}=${filter[key]}` : `${key}=${filter[key]}`;
			}
		});

		return filterUrl;
	}
}
