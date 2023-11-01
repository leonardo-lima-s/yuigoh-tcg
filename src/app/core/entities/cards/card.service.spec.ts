import { TestBed } from '@angular/core/testing';
import { CardsService } from './cards.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CardFilter } from './card-filter';

import MIRROR_FORCE from 'mock/mirror_force.json';
import LEVEL_FOUR from 'mock/all_level_four_monster.json';
import DESC_TYPE from 'mock/cards_desc_elemental_skill.json';

describe('Class test to CardService', () => {
  let cardService: CardsService;
  let httpController: HttpTestingController;
  let urlBase = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CardsService],
    });

    cardService = TestBed.inject(CardsService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('Test get card by name', () => {
    const cardFilter: CardFilter = {
      name: 'Mirror%20Force',
      type: '',
      frameType: '',
      desc: '',
      atk: '',
      def: '',
      race: '',
      attribute: '',
      level: '',
    };

    cardService.getCardList(cardFilter).subscribe({
      next: (res) => {
        expect(res).toEqual(MIRROR_FORCE);
      },
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${urlBase}?name=${cardFilter.name}`,
    });

    req.flush(MIRROR_FORCE);
  });

  it('Test get for all level 4 cards', () => {
    const cardFilter: CardFilter = {
      name: '',
      type: '',
      frameType: '',
      desc: '',
      atk: '',
      def: '',
      race: '',
      attribute: '',
      level: '4',
    };

    cardService.getCardList(cardFilter).subscribe({
      next: (res) => {
        expect(res).toEqual(LEVEL_FOUR);
      },
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${urlBase}?level=${cardFilter.level}`,
    });

    req.flush(LEVEL_FOUR);
  });

  it('Test get all skill cards have Elemental in desc', () => {
    const cardFilter: CardFilter = {
      name: '',
      type: 'Skill%20Card',
      frameType: '',
      desc: 'Elemental',
      atk: '',
      def: '',
      race: '',
      attribute: '',
      level: '',
    };

    cardService.getCardList(cardFilter).subscribe({
      next: (res) => {
        expect(res).toEqual(DESC_TYPE);
      },
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${urlBase}?type=${cardFilter.type}&desc=${cardFilter.desc}`,
    });

    req.flush(DESC_TYPE);
  });
});
