import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(){
    //Caso de F5 (atualize a página) será informado e solicitado que o usuario entre novamente 
    if (environment.token == ''){
      alert('Sua sessão expirou, faça o login novamente.')
        this.router.navigate(['/entrar'])
    } 
  }

}