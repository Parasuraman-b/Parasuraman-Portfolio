import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
    
   form = {
    name: '',
    email: '',
    message: ''
  };

  submitForm() {
    console.log(this.form);
    alert('Message Sent Successfully!');
    this.form = { name: '', email: '', message: '' };
  }
  
}
