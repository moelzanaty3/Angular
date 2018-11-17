import { Component } from '@angular/core';
import { AuthService } from './../../_auth';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent {
  constructor(private auth: AuthService) {
    // Check for authentication and handle if hash present
    auth.handleAuth();
  }
}
