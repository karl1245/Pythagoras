import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TrianglePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-triangle',
  templateUrl: 'triangle.html',
})
export class TrianglePage {
  message: String;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  receiveMessage($event) {
    this.message = $event
    console.log(this.message)
  }

}
