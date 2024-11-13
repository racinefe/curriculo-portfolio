import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
              RouterOutlet,
              RouterModule,
            ],
            
  template: `<router-outlet />`,
    
})
export class AppComponent {}
