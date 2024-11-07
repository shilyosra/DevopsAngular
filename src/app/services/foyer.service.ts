import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Foyer } from '../models/foyer.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FoyerService {

  private baseUrl = 'http://192.168.50.4:8089/tpfoyer/foyer';

  constructor(private http: HttpClient) { }

  getAllFoyers(): Observable<Foyer[]> {
    return this.http.get<Foyer[]>(`${this.baseUrl}/retrieve-all-foyers`);
  }

  getFoyerById(id: string): Observable<Foyer> {
    return this.http.get<Foyer>(`${this.baseUrl}/retrieve-foyer/${id}`);
  }

  getFoyerByNameAndCapacite(nomFoyer: string, capaciteFoyer: number): Observable<Foyer[]> {
    return this.http.get<Foyer[]>(`${this.baseUrl}/retrieve-foyer-Name-Capacite/${nomFoyer}/${capaciteFoyer}`);
  }

  addFoyer(foyer: Foyer): Observable<Foyer> {
    return this.http.post<Foyer>(`${this.baseUrl}/add-foyer`, foyer);
  }

  deleteFoyer(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/remove-foyer/${id}`);
  }

  updateFoyer(foyer: Foyer): Observable<Foyer> {
    return this.http.put<Foyer>(`${this.baseUrl}/modify-foyer`, foyer);
  }
}
