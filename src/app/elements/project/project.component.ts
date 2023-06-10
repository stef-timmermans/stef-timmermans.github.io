import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  @Input() id!: number;
  @Input() name!: string;
  @Input() description!: string;
  @Input() tags!: string[];
  @Input() repository!: string;
  @Input() image!: string;

}
