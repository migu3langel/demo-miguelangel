import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  response: any ;
  constructor( private http: HttpClient) { }

  ngOnInit(): void {
    var formData: any = new FormData();
    formData.append('credenciales','{"USUARIO":"3","token":"d7403066713e9d99bcc97a8db69bfb67"}');
    this.http.post('https://sistema.tutto.gt/public/api/perfil', formData).subscribe(response=>{

      this.response=response;
       console.log(response)

    }


    );
  }

}
