import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { HomePage } from './home';
import { ComponentsModule } from '../../components/components.module';
import { HistoryComponent } from '../../components/history/history';

@NgModule({
  declarations: [
    HomePage,
    ComponentsModule,
    HistoryComponent
  ],
  imports: [
    IonicModule,
    IonicPageModule.forChild(HomePage),
    ComponentsModule,
    HistoryComponent
  ],
})
export class HomePageModule {}
