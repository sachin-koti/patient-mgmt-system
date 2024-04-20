import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PatientSearchComponent } from './patient-search/patient-search.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PatientSearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'patient-mgmt-system';
}
