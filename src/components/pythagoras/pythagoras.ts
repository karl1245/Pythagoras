import { Component, Output, EventEmitter} from '@angular/core';
import { HistoryDataProvider } from '../../providers/history-data/history-data';

/**
 * Generated class for the PythagorasComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pythagoras',
  templateUrl: 'pythagoras.html'
})
export class PythagorasComponent{
  triangle = {
    a: '',
    b: '',
    c: ''

  };
    side: string;
    value: string;
    error : string;
    trueerror: boolean;
  
    @Output() messageEvent = new EventEmitter<String>();
    
    // logic for correct input
    inputchecker(a,b,c){
      var err1 = "Enter 2 values";
      var err2 = "Hypothenus must be larger than side";
      if(c == '' && b == '' && a!= ''){
        this.error = err1;
        return false;
      }
      if (c == ''){
        if(a == '' || b == ''){
          this.error = err1;
          return false;
  
        } else if(a == '' && b == ''){
          this.error = err1;
          return false;
        }
      } else {
        if (c != '' && b == '' && a=='' ){
          this.error = err1;
          return false;
  
        } else if (c < b){
          this.error = err2;
          return false;
  
        } else if (c < a){
          this.error = err2;
          return false
        }
      }
  
      return true;
    }
  
    //mapping for triangle values maybe shouldve used an interface here?
    mapping(sideOne, sideOneValue,  sideTwo, sideTwoValue, foundSide, foundValue){
      let map = new Map()
      map.set(sideOne, sideOneValue)
      map.set(sideTwo, sideTwoValue)
      map.set("found side", foundSide)
      map.set("value", foundValue)
      return map;
    }
  
    //getting keys as a list from the map created
    getKey(map,value) {
      return map.find(([key, val]) => val == value)[0]
    }
  
    pythcalc(form){
      this.trueerror = false;
      var a = form.value['a'];
      var b = form.value['b'];
      var c = form.value['c'];
      let map;
  
      //here we check for which calculation should be used for the theorem
      if(this.inputchecker(a,b,c)){
        if(c == ''){
          this.value = Math.sqrt(a**2 + b**2).toFixed(2);
          this.side = "c";
           map = this.mapping("a",a,"b",b,this.side,this.value)
        }
        
        
        else if(a == ''){
          this.value = Math.sqrt(c**2 - b**2).toFixed(2);
          this.side = "a"
          map = this.mapping("c",c,"b",b,this.side,this.value)
        }
        
        else if( b == ''){
          this.value = Math.sqrt(c**2 - a**2).toFixed(2);
          this.side = "b"
          map = this.mapping("a",a,"c",c,this.side,this.value)
        }
  
      } else {
        this.trueerror = true;
      }
      document.getElementById('result').style.display = "block";
  
      if(!this.trueerror){
        let keys = Array.from(map.keys());
        var message = "You had sides " + keys[0] + " = " + map.get(keys[0]) + " and "  + keys[1] + " = "
         + map.get(keys[1]) + " and " + keys[2]  + " " +map.get(keys[2])+ " = " + map.get(keys[3])
        this.data.changeMessage(message)
        console.log(message)
      }
    }
  
    constructor(private data: HistoryDataProvider){
  
    }
  
  
  }
  