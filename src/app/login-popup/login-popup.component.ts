import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.scss']
})
export class LoginPopupComponent implements AfterViewInit {
  @ViewChild('signUpButton') signUpButtonRef!: ElementRef;
  @ViewChild('signInButton') signInButtonRef!: ElementRef;
  @ViewChild('container') containerRef!: ElementRef;
  headerVisible: boolean = false; // Initialize as false, since you want to hide it
  footerVisible: boolean = false; // Initialize as false, since you want to hide it
  registrationName: string = '';
  registrationEmail: string = '';
  registrationPassword: string = '';

  email: string = '';      // Initialize email property
  password: string = '';

  ngAfterViewInit(): void {
    this.setupButtonListeners();
  }
  private setupButtonListeners(): void {
    const signUpButton = this.signUpButtonRef.nativeElement;
    const signInButton = this.signInButtonRef.nativeElement;
    const container = this.containerRef.nativeElement;

    signUpButton.addEventListener('click', () => {
      container.classList.add('right-panel-active');
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove('right-panel-active');
    });
  }

  showLoginForm() {
    console.log('Showing login form');
    this.headerVisible = false;
    this.footerVisible = false;
    console.log('headerVisible:', this.headerVisible);
    console.log('footerVisible:', this.footerVisible);
    // Additional logic related to showing the login form
  }

  hideLoginForm() {
    console.log('Hiding login form');
    this.headerVisible = true;
    this.footerVisible = true;
    console.log('headerVisible:', this.headerVisible);
    console.log('footerVisible:', this.footerVisible);
    // Additional logic related to hiding the login form
  }
  constructor(private authService: AuthService, private router: Router,private snackBar: MatSnackBar) {}
  register(name: string, email: string, password: string): void {
    this.authService.register(email, password);
    // Additional logic (if needed)
  }

  login(email: string, password: string): void {
    const areCredentialsValid = this.authService.login(this.email, this.password);
    if (areCredentialsValid) {
      this.router.navigate(['/home']);
    } else {
      // Handle login failure (if needed)
    }
  }

  logout(): void {
    this.authService.logout();
  }
  registerUser() {
    // Use AuthService to register the user
    this.authService.register(this.registrationEmail, this.registrationPassword);

    // Clear the registration inputs
    this.registrationName = '';
    this.registrationEmail = '';
    this.registrationPassword = '';

    // Optionally, you can perform any other logic related to registration success
  }

  loginUser(emailInput: HTMLInputElement, passwordInput: HTMLInputElement) {
    const email = emailInput.value;
    const password = passwordInput.value;

    // Assuming you have the logic to validate the login credentials
    const areCredentialsValid = this.authService.login(email, password);

    if (areCredentialsValid) {
      // Navigate to the home page or perform other actions
      this.router.navigate(['/home']);
    } else {
      // Show a snackbar with an error message
      this.snackBar.open('Incorrect email or password', 'Dismiss', {
        duration: 3000, // Duration in milliseconds
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
    }
  }
}
