import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  title = 'About';

  leftTitle = 'My Basic Information';

  infoList = [
    { label: 'NAME', value: 'Parasuraman B' },
    { label: 'EMAIL', value: 'parasuramanb003@gmail.com' },
    { label: 'PHONE', value: '7904101720' },
    { label: 'ADDRESS', value: '1/1 Maharajapuram St, Manaloor, Thanjavur (Dt)' },
    { label: 'LANGUAGE', value: 'English, Tamil' }
  ];

}