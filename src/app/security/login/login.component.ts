import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from './../../shared/message/notification.service';
import { LoginService } from './login.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  navigateTo: string

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private notificationService: NotificationService,
              private activatedRouter: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required])
    })
    this.navigateTo = this.activatedRouter.snapshot.params['to'] || '/' //caso não exista nenhuma rota irá ser redirecionado para página de login
  }

  login(){
    this.loginService.login(this.loginForm.value.email,
                            this.loginForm.value.password)
                     .subscribe( user =>
                                    this.notificationService.notify(`Bem vindo, ${user.name}`),
                                 response => //HTTPErrorResponse
                                    this.notificationService.notify(response.error.message),
                                 () => {
                                    this.router.navigate([this.navigateTo])
                                 })
  }

}
