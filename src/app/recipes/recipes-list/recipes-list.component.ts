import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Test description', 'https://i.pinimg.com/736x/1a/b2/d1/1ab2d16e96e018da29715a846bfc91a6.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
