import {
  MatButtonModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule,
  MatIconModule, MatListModule, MatTableModule, MatCardModule,
  MatFormFieldModule, MatInputModule, MatExpansionModule, MatChipsModule,
  MatAutocompleteModule, MatSnackBarModule
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
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatChipsModule,
    MatAutocompleteModule,MatSnackBarModule,
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatChipsModule,
    MatAutocompleteModule,MatSnackBarModule,
  ]
})
export class MaterialModule {}
