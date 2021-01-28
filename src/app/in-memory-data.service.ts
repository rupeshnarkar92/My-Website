import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo, ResponseOptions } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const users = [
      { id: 11, firstName: 'Rupesh',lastName: 'Narkar', email:"rupesh@gmail.com", password:"admin"  },
      { id: 12, firstName: 'Avanish', lastName: 'Maurya',email:"avnish@gmail.com", password:"awesome" }     
    ];
    return {users};
  }

  getToken(user) {
    return 'this is a token';
  }

  post(reqInfo:RequestInfo){
    console.log("ReqInfo",reqInfo);
    if(reqInfo.id ==="login"){
      return reqInfo.utils.createResponse$(()=> {
      const dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;
       const users = reqInfo.collection.find(user=>{
          reqInfo.req["body"].email === user.email && reqInfo.req["body"].password === user.password ;
        });

        let responseBody = {}

        if(users) {
          responseBody = {
            id : users.id,
            firstName: users.firstName,
            lastName: users.lastName,
            email :users.email,
            token: this.getToken(users)
          };
        }

       
        const options: ResponseOptions = responseBody ?
        {          
          body: dataEncapsulation ? { responseBody } : responseBody,
          status: 200
        } :
        {
          body: { error: `'Users' with email ='${reqInfo.req["body"].email}' not found` },
          status: 404
        };

        options.statusText = options.status === 200 ? "ok" : "Not Found";
        options.headers = reqInfo.headers;
        options.url = reqInfo.url;
        return options;
    });

    } else if(reqInfo.id === "signup") {
      reqInfo.id = null
      console.log("From Signup")
    }
  }
}
