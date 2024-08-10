import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.style.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  formGroup = this.formBuilder.group({
    name: ['', Validators.required],
    code: ['', Validators.required],
    idNumber: [''],
    phoneNumber: [''],
    address: [''],
    customerGroupId: [''],
    description: [''],
    enabled: [true],
  });

  constructor(private formBuilder: FormBuilder) {}
}
