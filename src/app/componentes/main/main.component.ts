import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
//  selector: 'app-main',
  selector: 'app-outlet',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent {

  title = "Cloudent";
  isResponsive: boolean = false;
  isSessionCurrent = false;
  
  constructor(private router: Router) {}
  
  ngOnInit(): void {
    const isSessionCurrent = localStorage.getItem('session');
    this.isSessionCurrent = isSessionCurrent != undefined;
  }

  goSalir(): void {
    localStorage.removeItem('session');
    this.router.navigate(['login']);
  }

}
