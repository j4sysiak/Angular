import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-reddit-clone';
  name = 'Jacek Sysiak';
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  // loadedFeature = 'recipe';

  onIntervalFired(fireNumber: number) {
    console.log(fireNumber);
    if (fireNumber % 2 === 0) {
      this.evenNumbers.push(fireNumber);
    } else {
      this.oddNumbers.push(fireNumber);
    }
  }

  // onNavigate(feature: string) {
  //   this.loadedFeature = feature;
  // }
}
