import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    token: string;

    constructor(private router:Router){}

    onSignUp(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(
            response=> console.log(response)
        )
            .catch(
                error => console.log(error)
            )
    }


    onSignIn(email: string, password: string) {

        firebase.auth().signInWithEmailAndPassword(email, password) //this is a promise
            .then(
                response => {                    
                    this.router.navigate(['/recipes']);

                    firebase.auth().currentUser.getIdToken()
                    .then(
                        (token:string)=>{
                            this.token = token; //accessing the token
                        }
                    )
                    console.log(response)
                }
            )
            .catch(
                error => console.log(error)
            )
    }

    getToken(){
        firebase.auth().currentUser.getIdToken()
        .then(
            (token:string)=>
            {
                this.token = token; //accessing the token
            }
        )
        return this.token;
    }

    isAuthenticated(){       
        return this.token != null; //if the token is not null which means there is a user logged in
    }

    logout(){
        firebase.auth().signOut();
        this.token = null;
    }
}