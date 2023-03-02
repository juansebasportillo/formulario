import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Basic ' + btoa('skytel_form:oDXAoC6cos7ErfnxXRuHeFbLVWDy')
  })
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'formulario';
  url = 'http://127.0.0.1:8000/api/formulario';
  constructor(private http:HttpClient){}
  message: boolean=false;
  onSubmit(data:any){
    
    this.http.post(this.url, data, httpOptions).subscribe((result)=>{
      this.message = true;
      window.alert(JSON.stringify(result));
    })
    console.warn(data);
    (<HTMLFormElement>document.getElementById("reset")).reset();
  }

  removeMessage(){
    this.message = false;
  }
}

