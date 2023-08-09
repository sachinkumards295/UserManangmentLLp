import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {


  userData: any;
 showUser: boolean | undefined;

 updateDetais: boolean | undefined;
 dataId: any;
  

  constructor(private userService: UserService) { }

  ngOnInit(): void {
   
  this.getAlluserData();
    
  }
 getAlluserData() {
  this.userService.getUserDetails().subscribe( (data) => {
    this.userData = data;
  })
 }
  openModal(){
  
 this.showUser = true;
  }
  editModal(id: any){
    this.dataId = id;
    this.updateDetais = true;
  }

  Delete(id:any){
   this.userService.Delete(id).subscribe( (data) => {
    if(data){
      alert("hey Data Deleted sucessFully");
      this.getAlluserData();
    }
   })
  }

}
