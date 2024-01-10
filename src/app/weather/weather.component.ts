import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MatSelect, MatSelectChange, MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {WeatherService} from "../../service/weather.service";
import {Weather} from "../../dto/weather";
import {JsonPipe, NgOptimizedImage, NgStyle} from "@angular/common";
import {LocationTableComponent} from "../location-table/location-table.component";
import {TemperatureTableComponent} from "../temperature-table/temperature-table.component";
import {AirQualityTableComponent} from "../air-quality-table/air-quality-table.component";
@Component({
  selector: 'app-weather',
  standalone: true,
    imports: [MatFormFieldModule, MatSelectModule, JsonPipe, LocationTableComponent, TemperatureTableComponent, AirQualityTableComponent, NgStyle, NgOptimizedImage],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})

export class WeatherComponent{
    selected = 'Bangalore';
    locations: string[] = [];
    weather: Weather | undefined;
    imageUrl: string = 'https://media.giphy.com/media/12wteMTXxjLaVO/giphy.gif';


    constructor(private weatherService: WeatherService) {
        this.weatherService.getLocations().subscribe((data: string[]) => {
            console.log(data);
            this.locations = data;
            this.updateWeather(data[1]);
        })
    }

    onMatSelectChange($event: MatSelectChange) {
        this.updateWeather($event.value)
    }

    updateWeather(city:string) {
        this.weatherService.getWeather(city).subscribe((data: Weather) => {
            console.log(data);
            this.weather = data;

            console.log(this.weather.current.condition.text)
            this.imageUrl=this.weather.current.condition.icon;


        })

    }
}
