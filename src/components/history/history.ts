import { Component, OnInit } from '@angular/core';
import { HistoryDataProvider } from '../../providers/history-data/history-data';

/**
 * Generated class for the HistoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'history',
  templateUrl: 'history.html'
})
export class HistoryComponent implements OnInit{

  message: any;
  maplist: string[] = [];

  constructor(private data: HistoryDataProvider) { }
  //add the recieved value to the history of calculations
  ngOnInit() {
    this.data.currentMessage.subscribe(message =>{
      this.message = message
      this.maplist.push(this.message)
    })
  }

}
