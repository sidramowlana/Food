import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { AuthGuardService } from './auth/authGuard.service';

const appRoutes: Routes =
    [
        { path: '', redirectTo: '/signIn', pathMatch: 'full' },
        {
            path: 'recipes', component: RecipesComponent, children:
                [
                    { path: '', component: RecipeStartComponent },
                    { path: 'new', component: RecipeEditComponent,canActivate:[AuthGuardService] },
                    { path: ':id', component: RecipeDetailComponent },
                    { path: ':id/edit', component: RecipeEditComponent,canActivate:[AuthGuardService] }
                ]
        },
        { path: 'shopping-list', component: ShoppingListComponent,canActivate:[AuthGuardService] },
        // { path: 'shopping-list', component: ShoppingListComponent,canActivate:[AuthGuardService] }, this will not allow the user to go to this page unless they are logged users
        // { path: 'not-found', component: PageNotFoundComponent },
        // { path: '**', redirectTo: '/not-found' },
        { path: 'signUp', component: SignUpComponent },
        { path: 'signIn', component: SignInComponent },
    ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}