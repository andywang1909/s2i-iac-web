import { Component, Input } from '@angular/core';

//TODO remove since having VoIacService
import { VoIac } from './vo-iac';

import { VoIacService } from './vo-iac.service'; 

@Component({
  selector: 'app-root',
  providers: [VoIacService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IAC Demo';

  constructor(private voIacService: VoIacService) {
  }

  voIac: VoIac = this.voIacService.getHistory();

  verify() {
    this.voIacService.verify(this.voIac); 
    //this.voIac.verified = 'Y';
  }
}