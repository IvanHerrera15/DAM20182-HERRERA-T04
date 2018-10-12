import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {Page1} from "../page1/page1";
import {UserService} from "../../services/user";

@Component({
    selector:'page-two',
    templateUrl:'page2.html' 
})

export class Page2{
    public user:any;
    public nav:any;
    constructor(public navCtrl:NavController, user:UserService, nav:NavController){
        console.log(user.name);
        this.user= user;
        this.nav= nav;
    }

    goToPage1(){
        this.nav.push(Page1);
    }
}