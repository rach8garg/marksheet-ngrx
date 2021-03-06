import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarksheetRoutingModule } from './marksheet-routing.module';
import { HomeComponent } from './home/home.component';
import { ListMarksComponent } from './list-marks/list-marks.component';
import { AddMarksComponent } from './add-marks/add-marks.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducer, featureKey } from './state/marksheet.reducer';
import { MarksheetEffects } from './state/marksheet.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    MarksheetRoutingModule,
    FormsModule,
    EffectsModule.forFeature([MarksheetEffects]),
    StoreModule.forFeature(featureKey, reducer),      //register the state container
  ],
  declarations: [HomeComponent, ListMarksComponent, AddMarksComponent]
})
export class MarksheetModule { }
