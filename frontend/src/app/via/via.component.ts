import { Component, OnInit } from '@angular/core';
import {  HttpClient } from '@angular/common/http'
import { Via } from './via';

@Component({
  selector: 'app-via',
    templateUrl: './via.component.html',
    styleUrls: ['./via.component.css']
  })

  export class ViaComponent implements OnInit {

  	via = new Via();
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
				res => { 	this.via.content = res['response'];
						this.textValueOutput = JSON.stringify(this.via.content);
				},
				err => { console.log("Error occured");}
		     );
	}
}
	    
