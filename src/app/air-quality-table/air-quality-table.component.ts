import {Component, Input} from '@angular/core';
import {Weather} from "../../dto/weather";

@Component({
  selector: 'app-air-quality-table',
  standalone: true,
  imports: [],
  templateUrl: './air-quality-table.component.html',
  styleUrl: './air-quality-table.component.css'
})
export class AirQualityTableComponent {
  @Input() weather!: Weather | undefined;
}
