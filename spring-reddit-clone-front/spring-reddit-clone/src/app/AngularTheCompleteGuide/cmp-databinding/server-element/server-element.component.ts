import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, ContentChild,
  DoCheck, ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges, ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'] // , encapsulation: ViewEncapsulation.None
})
// tslint:disable-next-line:max-line-length
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy {
  // tslint:disable-next-line:no-input-rename
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

  constructor() {
    console.log('in constructor');
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges) {
    console.log('in ngOnChanges');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('in ngOnInit');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log('in ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('in ngAfterContentInit');
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('in ngAfterContentChecked');
  }

  ngAfterViewChecked(): void {
    console.log('in ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('in ngAfterViewInit');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }

  ngOnDestroy(): void {
    console.log('in ngOnDestroy');
  }

}
