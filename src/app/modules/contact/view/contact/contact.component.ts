import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['../../../../../assets/css/contact.component.css']
})
export class ContactComponent implements OnInit {
  public success: boolean = false;
  public successMessage: string = '';
  public error: boolean = false;
  public errorMessage: string = '';

  constructor(private emailService: EmailService) { }

  ngOnInit() {
  }

  /**
   * Method that will send the message data to the API.
   * @param obj 
   */
  onSendForm(obj: object) {
    this.emailService.sendMessage(obj).subscribe(res => {
      //Check the response, so we can respond accordingly
      if(res.status === 200) {
        this.successMessage = "Your message has been sent. Thanks for your feedback!"
        this.success = true;
        this.error = false;
      } else {
        this.errorMessage = "Oops.. something went wrong. Please try again!"
        this.success = false;
        this.error = true;
      }
    });
  }

}
