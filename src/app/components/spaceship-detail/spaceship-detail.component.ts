import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { starWarsService } from '../services/starWars.service';
import { Spaceship } from 'src/app/interfaces/spaceships.interface';


@Component({
  selector: 'app-spaceship-detail',
  templateUrl: './spaceship-detail.component.html',
  styleUrls: ['./spaceship-detail.component.css'],
  providers: [starWarsService,
  ]
})
export class SpaceshipDetailComponent implements OnInit{

 constructor(
  private route: ActivatedRoute,
  private router: Router,
  private starwarsService: starWarsService
 ){}

  public detailedShip :Spaceship|undefined;  //starshipDetail!: StarshipDetail | undefined;
  id:string='';

  starshipImgs: any ;

  img="";
  imageLoaded: boolean = false;

  ppl = [""];


  public baseUrlImg: string =  "https://starwars-visualguide.com/assets/img/starships/"

  ngOnInit(): void {
    //const nauName: string|null = this.route.snapshot.paramMap.get("spaceshipsdetail");
    //const searchednau =
    //const pokemonId: string|null = this.route.snapshot.paramMap.get("id");


    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')!;
      this.starwarsService.getDetail(this.id).subscribe(resp => {
        console.log(resp);
        this.detailedShip = resp;
        //this.urlImg = resp.url+this.id;
        this.img = `${this.baseUrlImg}${this.id}.jpg`;
        console.log("this.img  -  ", this.img);
        this.imageLoaded = true
        console.log("this.imageLoaded  -  ", this.imageLoaded);
        this.ppl = resp.pilots
      });
    })

    /* this.starwarsService.getImg(this.id);
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')!;
      this.starwarsService.getImg(this.id).subscribe(resp => {
        console.log(resp);
        this.starshipImgs = resp;
        //this.urlImg = resp.url+this.id;
        console.log("this.urlImg  - ", `${this.baseUrlImg}${this.id}`);
        this.img = `${this.baseUrlImg}${this.id}`
        console.log("this.img  -  ", this.img);
      });
    }) */


/*     this.starwarsService.getImg(this.id)
    .subscribe((resp: any)=>{
      this.starshipImgs = resp.naves.nave;
      this.starshipImgs.forEach(nave =>{
        if (nave.name === this.detailedShip?.name) {

          this.img = nave.img;
          console.log("this.img  - ",  this.img); //http://localhost:4200/assets/img/Corvette_negvv.webp
        }
      })
  }) */
}


}
