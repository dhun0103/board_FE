import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  email: string = '';

  constructor(
    private mainService: MainService, private router: Router
  ) {}

  // onSubmit(): void {
  //   if (this.email) {
  //     this.mainService.subscribeEmail(this.email).subscribe({
  //       next: () => {
  //         this.router.navigate(['/posts']);  // Navigate to the bulletin board list page
  //       },
  //       error: (err) => {
  //         console.error('Error subscribing:', err);
  //       }
  //     });
  //   }
  // }

}
