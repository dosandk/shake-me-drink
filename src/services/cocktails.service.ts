
import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
<<<<<<< HEAD
import { CocktailsList, CocktailDetails, Categories } from '../app/app.models';
=======
import { CocktailsList, CocktailDetails, IngredientItem } from '../app/app.models';
import { DATA_URL } from '../config/api';

const DATA_KEY = 'drinks';
>>>>>>> master

@Injectable()
export class CocktailsService {
  constructor (private http: HttpClient) {}

<<<<<<< HEAD
  getCocktails(category): Observable<CocktailsList> {
    const response = this.http.get(`//www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
    return response.pipe(pluck('drinks'));
=======
  getCocktails(): Observable<CocktailsList> {
    const response = this.http.get(DATA_URL.COCKTAILS);
    return response.pipe(pluck(DATA_KEY));
>>>>>>> master
  }

  getIngredients (): Observable<Array<IngredientItem>> {
    const response =  this.http.get(DATA_URL.INGREDIENTS);
    return response.pipe(pluck(DATA_KEY));
  }

  getCocktailById (id): Observable<CocktailDetails> {
    const response = this.http.get(`${DATA_URL.COCKTAIL_BY_ID}${id}`);
    return response.pipe(pluck(DATA_KEY));
  }

  getDrinksByIngredient (ingredient): Observable<CocktailDetails> {
    const response = this.http.get(`${DATA_URL.COCKTAILS_BY_INGREDIENT}${ingredient}`);
    return response.pipe(pluck(DATA_KEY));
  }

  getCategories(): Observable<Categories> {
    const response = this.http.get('//www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    return response.pipe(pluck('drinks'));
  }
}
