import { Injectable } from '@angular/core';

import { VoIac } from './vo-iac';

@Injectable()
export class VoIacService {
  voIac : VoIac;

  constructor() { }

  //TODO json to file
  getHistory(): VoIac { 
    if (!this.voIac) {
      //TODO get real data
      this.voIac = {
        sessionId: 'S2016110899',
        verified: 'N',
        healthCard: {
          type: 'PHOTO-RW',
          number: '2222222222',
          versionCode: 'AS',
          lastPostalCode: 'M2J2V5',
          digitsOfCitizenship: '2222'
        },
        driverLicenceNeeded: 'YN',
        driverLicence: {
          number: '',
          issueDate: '2016-12-12',
          rin: '123',
          postalCode: 'M2J2V5',
          number1: '1a',
          number2: '2',
          number3: '3'
        }
      };
    }

    return this.voIac;
  }

  //TODO http and exception and waiting
  verify(voIac: VoIac): VoIacService {
    console.log( JSON.stringify(voIac) );
    voIac.verified = 'Y';
    return this; 
  } 

}
