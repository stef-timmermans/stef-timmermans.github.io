/*
* Folder: src/app/pages/contact
* Component: contact
*     This page is used to display my contact information,
*   point to my current resume (on Google Drive), and
*   provide a contact form. The form is tied to the email
*   service, which is used to send an email to my personal
*   email address.
*/

import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(private titleService: Title ) {
    this.titleService.setTitle('Contact');
  }
}
