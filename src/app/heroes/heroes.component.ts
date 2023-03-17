import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes=HEROES;

  hero : Hero ={
      id:1,
      name:'Windstorm'
  }


  constructor() { }
  //ngOnInit() 是一個生命週期鉤子，Angular 在建立完元件後很快就會呼叫 ngOnInit()。這裡是放置初始化邏輯的好地方。
  ngOnInit(): void {
  }
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
