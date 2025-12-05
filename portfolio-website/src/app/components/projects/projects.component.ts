import { Component } from '@angular/core';
import { SeuAdmissionDetailsComponent } from "../seu-admission-details/seu-admission-details.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SeuAdmissionDetailsComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
