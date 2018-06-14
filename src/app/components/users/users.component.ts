import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  name:String;
  age:number;
  email:String;
  // hobbies: String[];
  hobbies: any[]; //for any type
  address : Address
  posts:Post[];
  isEdit: boolean = false;

  //e.g. for declare and initialize
  // address:{
  //   street: String,
  //   houseNume: number,
  //   state: String,
  //   zip: number;
  // }


  //injecting service dpenedency

  constructor(private dataService:DataService) {
    console.log('constructor ran!');
    this.age=22;
    console.log('constructor Age '+this.age);
  }

  ngOnInit() {
    console.log('ngOnInit ran!');
    this.name = 'Usha Rani'
    this.name = "Usha Vamsi"
    this.email = "atvamshi1@gmail.com"
    this.age=27;
    this.address = {
      street : "Owasso St",
      houseNume : 3575,
      state: "MN",
      zip : 55447
    };
    this.hobbies = ['write code', 'watch movies', "listen to music"]

    this.dataService.getPosts().subscribe((posts) => {
      // console.log("Printing Respose whole "+ posts.json());
      this.posts = posts.json();
    });

    console.log("printing name "+this.name);
    console.log('ngOnInit Age '+this.age);

  }

  onClick(){
    console.log("Inside onClick event handler under ngOnInit")
    this.name = "Gopi Ramani Poni"
    this.hobbies.push('New Hobby')
  }

  addHobby(hobbyVal){
    console.log("Inside addHobby(hobbyVal) event handler under ngOnInit");
    this.hobbies.unshift(hobbyVal);
    return false;
  }

  deleteHoby(hobby){
    console.log("Inside Deleteing !!! <==> deleteHoby(hobbyVal) event handler under ngOnInit");
    for(let i=0; i< this.hobbies.length; i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i,1);
      }
    }
    return false;
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}

//Class or an interface or keep it in an other folder
interface Address {
  street: String,
  houseNume: number,
  state: String,
  zip: number;
}

interface Post{
  id:number;
  title:String;
  body:String;
  // body:String = "vamsi" //interface cannot have an initializer
}
