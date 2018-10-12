import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {Page2} from "../page2/page2";
import {UserService} from "../../services/user";

@Component({
    selector:'page1',
    templateUrl:'page1.html'
})

export class Page1{
    public user:any;
    public nav:any;
    constructor(public navCtrl:NavController, user:UserService, nav:NavController){
        console.log(user.name);
        this.user= user;
        this.nav= nav;
    }

    goToPage2(){
        this.nav.push(Page2);
    }
}