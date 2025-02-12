import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LicenseRequest } from '../Interface/license-request';
import { LicenseValidationRequest } from '../Interface/license-validation-request';

@Injectable({
  providedIn: 'root',
})
export class LicenseService {
  private url = 'https://localhost:7268/api/License';
  constructor(private http: HttpClient) {}
  generateKey(LicenseRequest: LicenseRequest) {
    return this.http.post(this.url + '/generate', LicenseRequest);
  }
  checkKey(LicenseValidationRequest: LicenseValidationRequest) {
    {
      return this.http.post(this.url + '/validate', LicenseValidationRequest);
    }
  }
}
