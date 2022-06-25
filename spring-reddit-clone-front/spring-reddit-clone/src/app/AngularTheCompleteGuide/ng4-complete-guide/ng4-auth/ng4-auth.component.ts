import {Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthResponseData, Ng4AuthService} from './ng4-auth.service';
import {Observable, Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {Ng4AlertComponent} from '../shared/ng4-alert/ng4-alert.component';
import {Ng4PlaceholderDirective} from '../shared/ng4-placeholder/ng4-placeholder.directive';

@Component({
  selector: 'app-ng4-auth',
  templateUrl: './ng4-auth.component.html',
  styleUrls: ['./ng4-auth.component.css']
})
export class Ng4AuthComponent implements OnDestroy {
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  @ViewChild(Ng4PlaceholderDirective, {static: false}) alertHost: Ng4PlaceholderDirective;
  private closeSub: Subscription;

  constructor(
    private authService: Ng4AuthService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;

    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password);
    }

    authObs.subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.showErrorAlert(errorMessage);
        this.isLoading = false;
      }
    );

    form.reset();
  }

  onHandleError() {
    this.error = null;
  }

  private showErrorAlert(message: string) {
    // const alertCmp = new Ng4AuthComponent();
    const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(Ng4AlertComponent);
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);

    componentRef.instance.message = message;
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
  }

  ngOnDestroy(): void {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }
}



























