import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';
import {map} from "rxjs/operators"

import { Spaceship, SpaceshipsResults } from 'src/app/interfaces/spaceships.interface';
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class starWarsService {


  public baseUrl = 'https://swapi.py4e.com/api'
  public spaceships: Spaceship[] = [];
  public results: Spaceship[] = [];
  public apiData: Spaceship[] = [];

  public pagination: Spaceship[] = [];

  public callSpacepship: any;
  public idNave: number = 0;

  public urlImg: string =  "https://starwars-visualguide.com/assets/img/starships"
  public page: number = 1;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute, ) { }


  // TOTAL SHIPs API
Service_apply(url:string = "https://swapi.dev/api/starships/") {
  //const url:string = `${ this.baseUrl }/starships/`.toString()
  return this.http.get<SpaceshipsResults>(url)

}

// GET DETAILED SHIP
getDetail(id:string):Observable<Spaceship>{
  const url:string = `${ this.baseUrl }/starships/`.toString()

  return this.http.get<Spaceship>(`${ this.baseUrl }/starships/${id}`);
}

// GET image path
  getImg(id:string):Observable<Object>{
    const url:string = `${ this.urlImg }/starships/`
    const url2:string = `${ this.urlImg }/starships/${id}.jpg`
    console.log(`${ this.urlImg }/starships/${id}.jpg`);
    console.log("url2 - ", url2);
    return this.http.get(`${ this.urlImg }/${id}.jpg`);
  }

  // PILOTS?
  getPpl(id:string):Observable<Object>{
    const url:string = `${ this.baseUrl }/starships/`
    console.log(`${ this.baseUrl }/starships/people/${id}`);
    //return this.http.get(`${ this.baseUrl }/people/${id}`);
    return this.http.get<Spaceship>(`${ this.baseUrl }/people/${id}`)
  }

getPageSuivantes(){
  //api/starships/?page=3

    const url:string = `${ this.baseUrl }/starships/?page=`
    return this.http.get<SpaceshipsResults>(url)
}

}
