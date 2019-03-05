import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['../../../../../assets/css/contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private emailService: EmailService) { }

  ngOnInit() {
  }

  /**
   * Method that will send the message data to the API.
   * @param obj 
   */
  onSendForm(obj: object) {
    this.emailService.sendMessage(obj).subscribe();
  }

}
