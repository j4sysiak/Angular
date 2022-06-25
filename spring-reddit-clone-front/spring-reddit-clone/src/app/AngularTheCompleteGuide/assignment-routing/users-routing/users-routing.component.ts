import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-routing',
  templateUrl: './users-routing.component.html',
  styleUrls: ['./users-routing.component.css']
})
export class UsersRoutingComponent implements OnInit {
  usersRouting = [
    {
      id: 1,
      name: 'Max'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Chris'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
