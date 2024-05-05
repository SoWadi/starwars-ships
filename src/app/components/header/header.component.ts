import { Component } from '@angular/core';
import { AccountService } from '../services/account.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


user?: User | null;

constructor(private accountService: AccountService) {
    this.accountService.user.subscribe(x => this.user = x);
}

logout() {
    this.accountService.logout();
}

compo_Logout(){
  return this.accountService.logout()
}
}
