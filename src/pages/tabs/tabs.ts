import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { TrianglePage } from '../triangle/triangle';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TrianglePage;

  constructor() {

  }
}
