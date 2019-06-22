import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Observable } from 'rxjs';
import { MatAutocomplete, MatChipInputEvent, MatAutocompleteSelectedEvent, MatSnackBar } from '@angular/material';
import { startWith, map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  catCtrl = new FormControl();
  filteredCategories: Observable<string[]>;
  categories: string[] = ['Música'];
  allCategories: string[] = ['Deportes', 'Fiestas', 'Convenciones', 'Cultura'];
  private user: User;
  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  constructor(private appAuthService: AuthService, private userService: UserService,
    private snackBar: MatSnackBar, private router: Router) {
    this.user = this.appAuthService.getUser();
    this.filteredCategories = this.catCtrl.valueChanges.pipe(
      startWith(null),
      map((cat: string | null) => cat ? this._filter(cat) : this.allCategories.slice()));
  }

  ngOnInit() {
  }

  add(event: MatChipInputEvent): void {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our category
      if ((value || '').trim()) {
        this.categories.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }
      this.catCtrl.setValue(null);
    }
  }

  remove(cat: string): void {
    const index = this.categories.indexOf(cat);

    if (index >= 0) {
      this.categories.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const index = this.categories.indexOf(event.option.viewValue);

    if (index === -1) {
      this.categories.push(event.option.viewValue);
      this.fruitInput.nativeElement.value = '';
      this.catCtrl.setValue(null);
    }

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allCategories.filter(cat => cat.toLowerCase().indexOf(filterValue) === 0);
  }

  saveCategories() {
    this.userService.savePreferences(this.categories, this.user._id)
    .subscribe(res => {
      if (res.success) {
        this.snackBar.open('Se agregaron tus preferencias correctamente', 'Cerrar', {
          duration: 2000,
        });
        this.appAuthService.setUser(res.data);
        this.router.navigateByUrl('/');
      } else {
        console.log(res.error);
        this.snackBar.open('Hubo un error al guardar tus preferencias', 'Cerrar', {
          duration: 2000,
        });
      }
    });
  }

}
