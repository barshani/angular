import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/app.component';
import { ApiService } from 'src/app/core/api.service';
import { AuthService } from 'src/app/core/auth.service';
import { SessionService } from 'src/app/core/session.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit{
user:Array<User>=[];
 title(title: any) {
      throw new Error('Method not implemented.');
    }
    constructor(
        private session: SessionService,
        private api: ApiService,
        private router: Router,
        private auth: AuthService
    ) { 
    }
    
    loggedIn(): boolean {
        return this.auth.isLoggedIn();
    }

    ngAfterViewInit(): void {
        this.session.redirectToHome();
    }

    logout() {
        this.api.deleteToken();
        this.router.navigate(['login']);
    }
}
