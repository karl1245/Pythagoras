import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrianglePage } from './triangle';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    TrianglePage,
    ComponentsModule
  ],
  imports: [
    IonicPageModule.forChild(TrianglePage),
    ComponentsModule
  ],
})
export class TrianglePageModule {}
