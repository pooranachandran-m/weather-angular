import {Component, Input, SimpleChanges} from '@angular/core';
import {Weather} from "../../dto/weather";

@Component({
  selector: 'app-temperature-table',
  standalone: true,
  imports: [],
  templateUrl: './temperature-table.component.html',
  styleUrl: './temperature-table.component.css'
})
export class TemperatureTableComponent {
  @Input() weather!: Weather | undefined;

  constructor() {
  }
}
