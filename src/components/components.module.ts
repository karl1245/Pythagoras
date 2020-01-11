import { NgModule } from '@angular/core';
import { HistoryComponent } from './history/history';
import { PythagorasComponent } from './pythagoras/pythagoras';
import { IonicModule, IonicPageModule } from 'ionic-angular';
@NgModule({
	declarations: [HistoryComponent,
    PythagorasComponent],
	imports: [IonicModule],
	exports: [HistoryComponent,
    PythagorasComponent]
})
export class ComponentsModule {}
