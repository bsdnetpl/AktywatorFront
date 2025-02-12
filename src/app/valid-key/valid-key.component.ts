import { Component } from '@angular/core';
import { LicenseService } from '../Service/license.service';
import { LicenseValidationRequest } from '../Interface/license-validation-request';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-valid-key',
  imports: [CommonModule, FormsModule],
  templateUrl: './valid-key.component.html',
  styleUrl: './valid-key.component.css',
})
export class ValidKeyComponent {
  key: string = '';
  nip: string = '';
  Isok: string = '';

  constructor(private licenseService: LicenseService) {}

  ValidLicenseKey() {
    const request: LicenseValidationRequest = {
      nip: this.nip,
      licenseKey: this.key,
    };
    this.licenseService.checkKey(request).subscribe({
      next: (response: any) => {
        console.log(response);
        this.Isok = response.isValid;
      },
      error: (error: any) => {
        console.error(error);
      },
    });
  }
}
