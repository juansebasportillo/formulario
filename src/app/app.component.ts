import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Basic ' + btoa('skytel_form:oDXAoC6cos7ErfnxXRuHeFbLVWDy')
  })
};

/*const basicAuth = 'skytel_form:oDXAoC6cos7ErfnxXRuHeFbLVWDy';
let Headers = new HttpHeaders();
Headers = Headers.append('Authorization', 'Basic ' + btoa(basicAuth));*/


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'formulario';
  url = 'http://127.0.0.1:8000/api/formulario';

  constructor(private http:HttpClient){}

  onSubmit(data:any){
    
    this.http.post(this.url, data, httpOptions).subscribe((result)=>{
      console.warn("result", result);
    })

    /*this.http
    .post(this.url, { headers: Headers })
    .subscribe(
        data => { // json data
            console.log('Success: ', data);
        },
        error => {
            console.log('Error: ', error);
        });*/

    console.warn(data);
  }
}
