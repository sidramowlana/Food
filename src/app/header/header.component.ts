import { Component, EventEmitter, Output } from '@angular/core';
import { StoreDataService } from '../shared/storeData.service';
import { Response } from '@angular/http';
import { AuthService } from '../auth/auth.service';
@Component({
    selector:'app-header',
    templateUrl:'header.component.html'
})

export class HeaderComponent
{
    // @Output() selectedFeature = new EventEmitter<string>();
    // onSelect(feature:string)
    // {
    //     this.selectedFeature.emit(feature);
    // }

    constructor(private storeDataService:StoreDataService,
        private authService:AuthService){}
    onSaveData(){
        this.storeDataService.saveRecipes().subscribe((response:Response)=>
        {
            console.log(response);
            
        });
    }

    onFetchData(){
        this.storeDataService.fetchRecipes();
    }
    onLogout(){
        this.authService.logout();
    }
}