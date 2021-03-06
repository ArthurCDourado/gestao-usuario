import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import { MEAT_API } from 'app/app.api';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Restaurant } from './restaurant/restaurant.model';
import {ErrorHandler} from '../app.error-handler';
import {MenuItemModel} from '../restaurant-detail/menu-item/menu-item.model';

@Injectable()
export class RestaurantsService {

  constructor(private http: Http) { }

  restaurants(): Observable<Restaurant[]> {
    return this.http.get(`${MEAT_API}/restaurants`).map(response => response.json()).catch(ErrorHandler.handleError);
  }

  restaurantById(id: string): Observable<Restaurant> {
    return this.http.get(`${MEAT_API}/restaurants/${id}`).map(response => response.json()).catch(ErrorHandler.handleError);
  }

  reviewsOfRestaurant(id: string): Observable<any> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`).map(response => response.json()).catch(ErrorHandler.handleError);
  }

  menuOfRestaurant(id: string): Observable<MenuItemModel[]> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/menu`).map(response => response.json()).catch(ErrorHandler.handleError);
  }
}
