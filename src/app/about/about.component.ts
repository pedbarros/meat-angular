import { HttpClient, HttpParams } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  _api = 'http://www.unimedmaceio.com.br/Smart/controle/Pacientes.php?PESQ=2&INI=0&FIM=100'

    constructor(private fb: FormBuilder, private http: HttpClient) { }

    buscarPaciente(search?: string){
      let params: HttpParams = undefined
      if (search){
        console.log(search)
        params = new HttpParams().append('NOME', search)
      }

      this.http.get<string>(this._api,  {params: params})
              .subscribe( dados => console.log(dados))
    }
  ngOnInit() {
  }

}
