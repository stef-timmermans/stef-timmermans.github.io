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
import { FormBuilder, Validators } from '@angular/forms';
import { EmailService } from '../../services/email/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  contactForm = this.fb.group({
    user_email: ['', Validators.required], // User email
    email_title: ['', Validators.required], // Email title
    message: ['', Validators.required] // Message content
  });

  constructor(private fb: FormBuilder,
              private emailService: EmailService,
              private titleService: Title) {

    this.titleService.setTitle('Contact');
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.emailService.sendEmail(this.contactForm.value);
    } else {
      console.error('Email form is invalid!');
    }
  }
}
