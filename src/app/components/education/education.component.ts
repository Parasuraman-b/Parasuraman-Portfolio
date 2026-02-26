import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  
  
  title = 'Education';
  educationList = [
    {
      year: '2020 - 2023',
      degree: "Bachelor's Degree",
      title: 'Bachelor of Computer Application',
      college: 'ANNAI VAILANKANNI ARTS & SCIENCE COLLEGE',
      score: 'Completed The Course With 73.9%'
    },
    {
      year: '2023 - 2025',
      degree: "Master's Degree",
      title: 'Master of Computer Application',
      college: 'DHANALAKSHMI SRINIVASAN ENGINEERING COLLEGE',
      score: 'Completed The Course With 7.6 CGPA'
      
    }
  ];

}