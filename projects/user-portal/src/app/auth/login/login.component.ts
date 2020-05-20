import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../shared/services/user.service';
import {User} from '../../shared/models/user.model';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  form: FormGroup;
  errorMessage: string = null;
  disableSubmit = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private authService: AuthService) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
    const formData = this.form.value;
    this.userService.getUserByEmail(formData.email)
      .subscribe((user: User) => {
        if (user) {
          if (user.password === formData.password) {
            window.localStorage.setItem('user', JSON.stringify(user));
            this.authService.login();
            this.router.navigate(['main']);
          } else {
            this.showMessage('Неверные данные');
          }
        } else {
          this.showMessage('Такого пользователя не существует');
        }
      });
  }

  get formControl() {
    return this.form.controls;
  }

  get formValue() {
    return this.form.value;
  }

  showMessage(text: string) {
    this.errorMessage = text;
    window.setTimeout(() => {
      this.errorMessage = null;
    }, 5000);
  }
}


