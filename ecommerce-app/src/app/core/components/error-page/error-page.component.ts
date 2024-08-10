import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'error',
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.style.css',
})
export class ErrorPageComponent {
  errorCode: any;
  errorMessage: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.errorCode = this.route.snapshot.paramMap.get('errorCode');
    if (this.errorCode == 401) this.errorMessage = 'Unauthorized';
    else if (this.errorCode == 403) this.errorMessage = 'Forbidden';
    else if (this.errorCode == 404) this.errorMessage = 'Not found';
    else if (this.errorCode == 409) this.errorMessage = 'Conflict';
    else if (this.errorCode == 500) this.errorMessage = 'Internal server error';
    else if (this.errorCode == 503) this.errorMessage = 'Service unavailable';
    else if (this.errorCode == 501) this.errorMessage = 'Not implemented';
    else if (this.errorCode == 504) this.errorMessage = 'Gateway timeout';
    else if (this.errorCode == 599) this.errorMessage = 'Network timeout';
    else if (this.errorCode == 502) this.errorMessage = 'Bad gateway';
    else this.errorMessage = 'Unknown error';
  }
}
