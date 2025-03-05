import { Component } from '@angular/core';
import { config } from 'src/config';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  resumeUrl = config.resumeUrl;
}
