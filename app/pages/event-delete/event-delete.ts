import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventData } from '../../providers/event-data/event-data';

@Component({
  templateUrl: 'build/pages/event-delete/event-delete.html',
  providers: [EventData]
})

export class EventDeletePage {
	
	constructor(argument) {
		// code...
	}
}