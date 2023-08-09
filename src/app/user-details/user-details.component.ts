import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {


  userDataById = [];

// private routeSub: Subscription;

  constructor(private  route:ActivatedRoute, private userService: UserService) {
  // this.routeSub =  this.route.params.subscribe( params => {
  //     this.id = params['id'];
  //     console.log(this.id);
  //   })
   }

  ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id');

  

    this.userService.getUserDetailsById(id).subscribe( (data) => {
    this.userDataById = data;
  console.log(this.userDataById);
;    })
  }

}
