import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
  } from '@angular/common/http';
  import { Observable } from 'rxjs';
   
  export class AddHeaderInterceptor implements HttpInterceptor {
    
    token:string = localStorage.getItem('token')||"";
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      // Clone the request to add the new header
      console.log("Headers added to the token "+ this.token)

      const clonedRequest = req.clone({ headers: req.headers.append('Authorization', 'Bearer '+this.token)
      .append('Access-Control-Allow-Origin',"*") 
    .append('Access-Control-Allow-Headers', "*")});
  
      // Pass the cloned request instead of the original request to the next handle
      return next.handle(clonedRequest);
    }
  }