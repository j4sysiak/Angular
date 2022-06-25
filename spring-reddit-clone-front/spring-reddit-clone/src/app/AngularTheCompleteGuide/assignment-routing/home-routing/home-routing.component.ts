import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthRoutingService} from '../auth-routing.service';

@Component({
  selector: 'app-home-routing',
  templateUrl: './home-routing.component.html',
  styleUrls: ['./home-routing.component.css']
})
export class HomeRoutingComponent implements OnInit {

  constructor(private router: Router,
              private authRoutingService: AuthRoutingService) { }

  ngOnInit(): void {
  }

  onLoadServersRouting(id: number) {
    // complex calculation
    this.router.navigate(['/servers-routing', id, 'edit'], { queryParams: {allowEdit: '1'}, fragment: 'loading' });
  }

  onLogin() {
    this.authRoutingService.login();
  }

  onLogout() {
    this.authRoutingService.logout();
  }
}
