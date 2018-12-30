import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  selectedNaviagtion = 'recipe';
  onNaviagte(feature:string)
  {
    this.selectedNaviagtion=feature;
  }

}
