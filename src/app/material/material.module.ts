import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatTableModule } from '@angular/material/table';

//Timepicker is not an angular component, but it functions similarly to one. 
//This can be moved if necessary.
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

const MaterialComponents = [
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule
]

@NgModule({
  imports: [
    MaterialComponents,
    NgxMaterialTimepickerModule
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
