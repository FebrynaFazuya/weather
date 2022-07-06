import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
	providedIn: 'root'
})
export class WeatherService {
	url = 'https://api.openweathermap.org/data/2.5/'
	key = '807ed0118a6a66a2b235c7af17cbc5c2'
	city = 'Magelang'

	constructor(private http: HttpClient) { }

	getDataNow() {
		return this.http.get(`${this.url}weather?q=${this.city}&appid=${this.key}&units=metric`);
	}

	getDataForecast() {
		return this.http.get(`${this.url}forecast?q=${this.city}&appid=${this.key}&units=metric`);
	}
}
