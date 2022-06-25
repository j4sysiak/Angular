import { Component, OnInit } from '@angular/core';
import {ServersRoutingService} from './servers-routing.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-servers-routing',
  templateUrl: './servers-routing.component.html',
  styleUrls: ['./servers-routing.component.css']
})
export class ServersRoutingComponent implements OnInit {

  public serversRouting: {id: number, name: string, status: string}[] = [];

  constructor(private serversRoutingService: ServersRoutingService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.serversRouting = this.serversRoutingService.getServersRouting();
  }

  onReload() {
    this.router.navigate(['/servers-routing'], {relativeTo: this.route});
  }
}
