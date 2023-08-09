import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() updateDetais: boolean | undefined;
  @Input() showUser: boolean | undefined;
  @Input() dataId: any;
  userForm = new FormGroup({
    firstname: new FormControl(),
    middlename: new FormControl(),
    lastname: new FormControl(),
    birthdate: new FormControl(),
    gender: new FormControl(),
    city: new FormControl(),
    country: new FormControl(),
    state: new FormControl(),
    zip: new FormControl()
  })
  constructor( private user: UserService) { }

  ngOnInit(): void {
  
  }

 

  submit(){
    if(this.showUser){
      const payload = {  "firstname": this.userForm.controls['firstname'].value,
      "middlename": this.userForm.controls['middlename'].value,
      "lastname": this.userForm.controls['lastname'].value,
      "gender": this.userForm.controls['gender'].value,
      "birthdate": this.userForm.controls['birthdate'].value,
      "city": this.userForm.controls['city'].value,
      "state": this.userForm.controls['state'].value,
      "country": this.userForm.controls['country'].value,
      "zip": this.userForm.controls['zip'].value}
  
      console.log(payload);
         this.user.saveUserData(payload).subscribe( (data) => {
  if(data){
    alert("hey Data saved sucessFully");
  }
         } )
    }
    if(this.updateDetais){
      const payloadUser = { 
        "id":this.dataId,
         "firstname": this.userForm.controls['firstname'].value,
      "middlename": this.userForm.controls['middlename'].value,
      "lastname": this.userForm.controls['lastname'].value,
      "gender": this.userForm.controls['gender'].value,
      "birthdate": this.userForm.controls['birthdate'].value,
      "city": this.userForm.controls['city'].value,
      "state": this.userForm.controls['state'].value,
      "country": this.userForm.controls['country'].value,
      "zip": this.userForm.controls['zip'].value}
      this.user.updateUser(payloadUser).subscribe( (data) => {
        if(data){
          alert("hey Data Updated sucessFully");
        }
      })

    
    }
 
  }



}
