import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from './User';

@Injectable({
  providedIn: 'root'
})
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
export class LoginService {
  private loginUrl = 'http://ec2-34-194-228-205.compute-1.amazonaws.com:3000/api/Users/login';  // URL to web api

  constructor(private http: HttpClient,
    ) { }

    addHero (usuario: User): Observable<User> {
      return this.http.post<User>(this.loginUrl, usuario, httpOptions).pipe(
        tap((usuario: User) => console.log(`logeando usuario w/ email=${usuario.email}`)),
        catchError(this.handleError<User>('logenadoUsuario'))
      );
    }


    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
  
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
  
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
}
