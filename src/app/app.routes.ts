import { Routes } from '@angular/router';
import { TemplateDemo } from './pages/template-demo/template-demo';
import { ReactiveDemo } from './pages/reactive-demo/reactive-demo';
import { MaterialForm } from './pages/material-form/material-form';

export const routes: Routes = [
  { path: '', redirectTo: 'material-form', pathMatch: 'full' },
  { path: 'template-demo', component: TemplateDemo },
  { path: 'reactive-demo', component: ReactiveDemo },
  { path: 'material-form', component: MaterialForm }, // Added comma here
  { path: '**', redirectTo: 'material-form' },
];