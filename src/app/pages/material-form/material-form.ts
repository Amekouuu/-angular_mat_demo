import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Material Imports
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-material-form',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    MatInputModule, 
    MatButtonModule, 
    MatRadioModule, 
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatSliderModule,
    MatSelectModule, 
    MatCheckboxModule, 
    MatSlideToggleModule
  ],
  templateUrl: './material-form.html',
  styleUrls: ['./material-form.css']
})
export class MaterialForm {
  registrationForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    gender: new FormControl('male'),
    address: new FormControl(''),
    birthDate: new FormControl('', [Validators.required]),
    department: new FormControl(''),
    skillLevel: new FormControl(5),
    agreeTerms: new FormControl(false, Validators.requiredTrue),
    notifications: new FormControl(true)
  });

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form Data:', this.registrationForm.value);
    }
  }
}