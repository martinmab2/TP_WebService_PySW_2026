import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root',
})
export class Page1 {
  constructor(private http: HttpClient) {}
  public getPaises(): Observable<any> {
    const httpOptions = { 
      headers: new HttpHeaders({
        'X-RapidAPI-Host': "country-state-city-search-rest-api.p.rapidapi.com",
        'X-RapidAPI-Key': "a3fea8f835msh76144ccaefaa664p1700c1jsn4bdb9062049a"
      })
    };
    return this.http.get("https://country-state-city-search-rest-api.p.rapidapi.com/allcountries", httpOptions)
  };

  public getEstados(isoCode: string): Observable<any> {
    const httpOptions = { 
      headers: new HttpHeaders({
        'X-RapidAPI-Host': "country-state-city-search-rest-api.p.rapidapi.com",
        'X-RapidAPI-Key': "a3fea8f835msh76144ccaefaa664p1700c1jsn4bdb9062049a"
      })
    };
    return this.http.get(`https://country-state-city-search-rest-api.p.rapidapi.com/states-by-countrycode?countrycode=${isoCode}`, httpOptions)
  };
}



