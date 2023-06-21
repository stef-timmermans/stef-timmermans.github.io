/*
* Folder: src/app/services/email
* Component: email
*     COMPONENT TODO
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  sendEmail(emailDetails: any) {
    let link = 'mailto:myforwardemail@dne.com?subject=${emailDetails.email_title}&body=Message from: ${emailDetails.user_email} %0D%0A ${emailDetails.message}';
    window.location.href = link;
  }
}
