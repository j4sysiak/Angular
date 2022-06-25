import {Component, OnInit} from '@angular/core';
import {AccountsService} from "./accounts.service";

@Component({
  selector: 'app-assignment-services',
  templateUrl: './assignment-services.component.html',
  styleUrls: ['./assignment-services.component.css']
})
export class AssignmentServicesComponent implements OnInit {
  accounts: {name: string, status: string}[] = [];

  constructor(private accountsService: AccountsService) {}

  ngOnInit(): void {
    this.accounts = this.accountsService.accounts;
  }
}
