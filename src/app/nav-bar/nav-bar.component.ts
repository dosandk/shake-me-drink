import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  user: any = {};
  isWide = true;

  constructor(private loginService: LoginService) {}

  ngOnInit () {
    this.user = this.loginService.user;
    console.error('this.user', this.user);
  }

  toggleWideView () {
    this.isWide = !this.isWide;
  }
}
