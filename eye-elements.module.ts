import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdCheckboxModule } from '@angular/material';

import { ColourPickerComponent } from './colour-picker/colour-picker.component';
import { DataTableComponent } from './data-table/data-table.component';

@NgModule({
  imports: [
    CommonModule,
    MdCheckboxModule
  ],
  declarations: [
    ColourPickerComponent,
    DataTableComponent
  ],
  exports: [
  	ColourPickerComponent,
  	DataTableComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class EyeElements { }
