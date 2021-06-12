import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , throwError} from 'rxjs';
import { GuestMessage } from '../models/message.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private url:string = 'assets/data/message.json';

  constructor(private http:HttpClient) { }

  getAllMessages():Observable<GuestMessage[]>{
    return this.http.get<GuestMessage[]>(this.url)
                    .pipe(
                      catchError(this.errorHandler)
                    );
  }

  errorHandler(err:HttpErrorResponse){
    return throwError(err.message || "Server Error");
  }
}
