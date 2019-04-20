import {
  MatButtonModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule,
  MatIconModule, MatListModule, MatTableModule, MatCardModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatCardModule
  ]
})
export class MaterialModule {}
