import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-ng4-alert',
  templateUrl: './ng4-alert.component.html',
  styleUrls: ['./ng4-alert.component.css']
})
export class Ng4AlertComponent implements OnInit {
  @Input() message: string;
  @Output() close = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onClose() {
    this.close.emit();
  }

}
