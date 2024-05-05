import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  Spaceship,
  SpaceshipsResults,
} from 'src/app/interfaces/spaceships.interface';
import { starWarsService } from '../services/starWars.service';
import { HttpClientModule } from '@angular/common/http';
import { AccountService } from '../services/account.service';
import { User } from 'src/app/interfaces/user';


@Component({
  selector: 'app-spaceships',
  templateUrl: './spaceships.component.html',
  styleUrls: ['./spaceships.component.css'],
})
export class SpaceshipsComponent implements OnInit {

  public listaStarships: Spaceship[] = [];
  public pagination: string = "";
  public varLoadMore: Spaceship[] = [];
  @ViewChild('scrollingArea') scrollingArea: any;

  page = 1;
  isLoading = false;
  nextPage = ""

  //items: any[] = []; // rplace par listaStarships
  user?: User | null;

  ;

  constructor(
    private router: Router,
    private starWarsService: starWarsService,
    private accountService: AccountService) {
      this.accountService.user.subscribe(x => this.user = x)
    }

  ngOnInit(): void {
    //llamo la API onInit
    this.Service_apply();
  }

  // Recupere data from api desde el Servicio
  Service_apply() {
    return this.starWarsService.Service_apply().subscribe((data) => {
      this.listaStarships = data.results;
      console.log(this.listaStarships);
      console.log(data.next);
    });
  }

// ++++++++++++++ SCROLLIN ??? ++++++++++++++

//Utilisez la directive @HostListener pour écouter l'événement de défilement dans le composant. Lorsque l'utilisateur fait défiler jusqu'à la fin de la liste, appelez la méthode loadMoreData().
  @HostListener('window:scroll', ['$event'])
onScroll(event: Event) {
  const windowHeight = window.innerHeight;
  //const scrollY = window.scrollY //|| window.pageYOffset;
  const scrollY = document.documentElement.scrollHeight || document.body.scrollTop;
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const documentHeight = document.documentElement.scrollHeight;

  if (windowHeight + scrollTop >= scrollY && !this.isLoading && this.page <5 ) { //&& !this.isLoading && this.nextPage !== null

    this.isLoading=true;
    this.page++;
    this.Service_pagination();
    this.loadMoreData();
    console.log("this.nextPage  -  ", this.nextPage);
    console.log("this.page  -  ", this.page);
    console.log("SCROLLING DOOOOOOWN");
  }

}

Service_pagination(){
  const url = `https://swapi.dev/api/starships/?page=${this.page}`;
    this.starWarsService.Service_apply(url)
    .subscribe((data) => {
      this.listaStarships = [...this.listaStarships, ...data.results];
      this.nextPage = data.next;
      this.pagination = data.next;
      this.isLoading = false
/*       console.log(this.pagination);
      console.log("data - ", data);
      console.log("data.next - ", data.next); */

    });
}

//Ajoutez une méthode dans le composant pour charger les données supplémentaires lorsque l'utilisateur fait défiler jusqu'à la fin de la liste. P
loadMoreData() {
  // Code pour charger les données supplémentaires
  // Effectuer une requête HTTP pour récupérer les données supplémentaires
    this.starWarsService.Service_apply().subscribe((response) => {
    const newData = response.results;
    this.varLoadMore = this.varLoadMore.concat(newData);
    this.page++;
    this.isLoading = false;
    //console.log("this.varLoadMore   -  ", this.varLoadMore)
  }) // devuelve lárray
    //console.log("ABAJOOOOO");
}


onScroll2() {
  // Calcula el valor de `showGoToTopButton` en función de si el usuario ha hecho scroll o no
  //this.showGoToTopButton = window.pageYOffset > 0;

  // Comprueba si se ha llegado al final de la página y carga más naves si es necesario
  if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
    //this.loadMoreData();

    console.log("onScroll2");
  }
}
// ++++++++++++++ SCROLLIN ??? ++++++++++++++



  }


