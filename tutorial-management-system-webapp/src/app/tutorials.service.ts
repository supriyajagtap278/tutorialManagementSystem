import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

const endpoint = 'http://localhost:3000/tutorials/';

@Injectable({
  providedIn: 'root'
})
export class TutorialsService {

  constructor(private http : HttpClient) { }

  getTutorials(): Observable<any> {
    return this.http.get(endpoint).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getTutorial(id : number): Observable<any> {
    return this.http.get(endpoint + id).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  addTutorial(tutorial : any): Observable<any> {
    return this.http.post(endpoint,tutorial).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  updateTutorial(tutorial : any): Observable<any> {
    return this.http.put(endpoint + tutorial.id,tutorial).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  deleteTutorial(id : number): Observable<any> {
    return this.http.delete(endpoint + id).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  deleteAllTutorials(): Observable<any> {
    return this.http.delete(endpoint).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  searchTutorials(seachKey): Observable<any> {
    return this.http.get(endpoint + 'search/' + seachKey).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }


  private extractData(res: Response): any {
    const body = res;
    return body || { };
  }


  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
