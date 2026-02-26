import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skills = [
  { name: 'Python', value: 80 },
  { name: 'Bootstrap', value: 90 },
  { name: 'HTML & CSS', value: 95 },
  { name: 'JavaScript', value: 75 },
  { name: 'Angular', value: 85 },
  { name: 'C#', value: 80 }
];

ngAfterViewInit() {
  setTimeout(() => {
    document.querySelectorAll('.fill').forEach((el: any) => {
      const val = el.style.getPropertyValue('--value');
      el.style.setProperty('--scale', val.replace('%','') / 100);
    });
  }, 300);
}

}
