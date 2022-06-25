import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  title = 'blog';
  data = {
    name: 'Jacek',
    age: 50,
    e_mail: 'test@wp.pl'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
