import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { UsersComponent } from './users/users.component';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, UsersComponent],
  template: `
    <h1>CRUD</h1>
    <app-users><app-users>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [provideHttpClient()],
});
