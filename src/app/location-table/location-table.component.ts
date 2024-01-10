import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Weather} from "../../dto/weather";
import {JsonPipe} from "@angular/common";
import {MatTableModule} from "@angular/material/table";

@Component({
  selector: 'app-location-table',
  standalone: true,
  imports: [
    JsonPipe,
    MatTableModule
  ],
  templateUrl: './location-table.component.html',
  styleUrl: './location-table.component.css'
})
export class LocationTableComponent implements OnChanges{
  @Input() weather!: Weather | undefined;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

}
