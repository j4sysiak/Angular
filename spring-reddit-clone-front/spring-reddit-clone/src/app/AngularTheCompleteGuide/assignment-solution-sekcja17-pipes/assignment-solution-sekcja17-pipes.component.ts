import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-assignment-solution-sekcja17-pipes',
  templateUrl: './assignment-solution-sekcja17-pipes.component.html',
  styleUrls: ['./assignment-solution-sekcja17-pipes.component.css']
})
export class AssignmentSolutionSekcja17PipesComponent implements OnInit {
  appStatus = new Promise((resolve => {
    setTimeout(() => {
      resolve('stable');
    }, 2000);
  }));
  filteredStatus = '';
  servers = [
    {
      instanceType: 'medium',
      name: 'Product',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  getStatusClasses(server: { instanceType: string, name: string, status: string, started: Date }) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }


  onAddServer() {
    this.servers.push({
      instanceType: 'small',
      name: 'New Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    });
  }
}
