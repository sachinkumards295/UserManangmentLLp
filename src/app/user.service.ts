import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }


  getUserDetails() {
   return  this.http.get('https://devservices.qpathways.com/otc/test/user')
  }


  getUserDetailsById(id:any){
    return this.http.get<any>('https://devservices.qpathways.com/otc/test/user/'  + id )
  }

  saveUserData(payload: {}) {
  return this.http.post('https://devservices.qpathways.com/otc/test/user/save', payload )

  }
  updateUser(payloadUser: {}) {
    return this.http.put('https://devservices.qpathways.com/otc/test/user/update', payloadUser)

  }

  Delete(id:any){
    return this.http.delete('https://devservices.qpathways.com/otc/test/user/delete/' + id)
  }

}
