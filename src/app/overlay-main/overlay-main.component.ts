import { Component, OnInit } from '@angular/core';
import { Signin } from '../signin';
import { from } from 'rxjs';
import { SigninService } from '../signin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-overlay-main',
  templateUrl: './overlay-main.component.html',
  styleUrls: ['./overlay-main.component.scss']
})
export class OverlayMainComponent implements OnInit {

  constructor(private signinDetails: SigninService,
    private router: Router) { }

  ngOnInit(): void {
  }
  onLogout()
  {
    this.signinDetails.Logout();
    this.router.navigate(['Sign-In']);
    return false;
  }
}
