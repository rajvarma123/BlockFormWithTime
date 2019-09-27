import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DisplayRoutes } from './display-data.routes';
import { DisplayDataComponent } from './display-data.component';

@NgModule({
  declarations: [DisplayDataComponent],
  imports: [CommonModule, RouterModule.forChild(DisplayRoutes)]
})
export class DisplayDataModule {}
