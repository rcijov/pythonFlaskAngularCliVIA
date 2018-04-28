import { Component, OnInit } from '@angular/core';
import {  HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-via',
    templateUrl: './via.component.html',
    styleUrls: ['./via.component.css']
  })

  export class ViaComponent implements OnInit {

  	textValueInput = "Input to API.";
	textValueOutput = "Output to API.";

        constructor(private http: HttpClient) { }

	ngOnInit() {
	}

	postJSON() {
		var ip = window.location.hostname;
		const req = this.http.post('http://'+ip+':9999/postjson', {
		request: this.textValueInput })
				.subscribe(
				res => { this.textValueOutput = JSON.stringify(res['response']);},
				err => { console.log("Error occured");}
		     );
	}
}
	    
