import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { EMPTY, Observable, catchError, delay, retry, tap } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";


@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
    constructor(private spinner:NgxSpinnerService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinner.show()
        return next.handle(req).pipe(delay(1000),tap((event)=>{
            if(event.type === HttpEventType.Response){
                this.spinner.hide()
            }
            
        }),
        catchError(error => {
            if(error instanceof HttpErrorResponse){
                this.spinner.hide()
            }
            return EMPTY
        }),
        )
    }
}