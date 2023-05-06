import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './core/api.service';
import { AuthService } from './core/auth.service';
import { SessionService } from './core/session.service';
export interface User {
    _id?: string | null;
    name?: string | null;
    email?: string | null;
    password?: string | null;
    token?: string | null;
}
export interface Customer {
    _id?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    phone?:string | null;
    email?: string | null;
    address?: string | null;
}
export interface Employee {
    _id?: string | null;
    name?: string | null;
    phone?:string | null;
    email?: string | null;
    address?: string | null;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    // title(title: any) {
    //   throw new Error('Method not implemented.');
    // }
    // constructor(
    //     private session: SessionService,
    //     private api: ApiService,
    //     private router: Router,
    //     private auth: AuthService
    // ) { }

    // loggedIn(): boolean {
    //     return this.auth.isLoggedIn();
    // }

    // ngAfterViewInit(): void {
    //     this.session.redirectToHome();
    // }

    // logout() {
    //     this.api.deleteToken();
    //     this.router.navigate(['login']);
    // }


}
