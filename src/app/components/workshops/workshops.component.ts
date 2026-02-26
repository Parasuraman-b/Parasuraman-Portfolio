import { Component } from '@angular/core';

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.css']
})
export class WorkshopsComponent {

  title = 'Achievements';

  achievements = [
    {
      leftTitle: 'Workshops',
      infoList: [
        "Participated in International Conference on Smart Intelligent Computing and Applications.",
        "Completed an internship at Vebbox Software Solutions, gaining hands-on experience in software development and real-world project implementation.",
        "Participated in a Cyber Security webinar conducted through Udemy, gaining insights into cybersecurity fundamentals and best practices."
      ]
    },
    {
      leftTitle: 'Certification',
      infoList: [
        'Completed Application Developer course at Jeyram Educational Trust with hands-on training in software development, debugging, and application deployment.',
        'Completed Web Design Course at Bharathidasan University, gaining strong skills in creating responsive and user-friendly websites.',
        'Done a Certification course on Python at Besent Technologies and acquired a strong foundation on the language.'
      ]
    }
  ];

}