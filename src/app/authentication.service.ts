import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  apiUrl ="api/users"

  constructor(private http : HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  signUp(formData: NgForm):Observable<any> {
     return this.http.post<any>( `${ this.apiUrl }/signup`, formData).pipe(
       tap(user=> {
         console.log("AuthService",user)
       }),
       catchError(this.handleError('SignupError', []))
     )
  }

  login(formData: NgForm):Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, formData).pipe(
      tap(user=> {
        console.log("AuthService",user)
      }),
      catchError(this.handleError('LoginError', []))
    )
 }
}
