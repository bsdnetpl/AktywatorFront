import { Component } from '@angular/core';
import { LicenseService } from '../Service/license.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LicenseRequest } from '../Interface/license-request';
import { CommonModule } from '@angular/common';
import { LicenseResponse } from '../Interface/license-response';

@Component({
  selector: 'app-create-license',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './create-license.component.html',
  styleUrl: './create-license.component.css',
})
export class CreateLicenseComponent {
  nip: string = '';
  licenseKey: string = '';
  constructor(private licenseService: LicenseService) {}
  generateLicenseKey() {
    const request: LicenseRequest = {
      nip: this.nip,
    };

    this.licenseService.generateKey(request).subscribe({
      next: (response: any) => {
        console.log(response);
        this.licenseKey = response['licenseKey'];
      },
    });
  }
}
