import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id:number;
  editMode = false;

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params:Params)=>
      {
        this.id = +params['id'];       
        this.editMode = params['id'] != null;  //ur checking whether the parameters is without an id (which is null)
        //if it is not with a id then false if it is with an id then true which means it will be true edit mode
        console.log(this.editMode);
      }
    );
  }

}
