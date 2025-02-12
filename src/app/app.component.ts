import { Component } from '@angular/core';
import { CreateLicenseComponent } from './create-license/create-license.component';
import { ValidKeyComponent } from './valid-key/valid-key.component';

@Component({
  selector: 'app-root',
  imports: [CreateLicenseComponent, ValidKeyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'aktywator';
}
