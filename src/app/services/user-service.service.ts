import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  apiBaseUrl = 'http://universities.hipolabs.com/search'
  constructor(private router: Router,
    private http:HttpClient
  ) { }

  onLogout() {
    localStorage.removeItem('name');
    localStorage.removeItem('searchCount');
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  getdata(country: string): Observable<any> {
    const url = `${this.apiBaseUrl}?country=${country}`;
    return this.http.get<any>(url).pipe(retry(1),catchError(this.errorHandl))
  }

  errorHandl(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
