import { Component } from '@angular/core';
import { Hero } from '../Hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {


  hero : Hero ={
      id:1,
      name:'Windstorm'
  }


  constructor() { }
  //ngOnInit() 是一個生命週期鉤子，Angular 在建立完元件後很快就會呼叫 ngOnInit()。這裡是放置初始化邏輯的好地方。
  ngOnInit(): void {
  }

}
