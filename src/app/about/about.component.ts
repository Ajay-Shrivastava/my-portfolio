import { NgClass, NgFor, NgIf, NgSwitch, NgSwitchCase, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgIf, NgFor, NgTemplateOutlet, NgSwitch, NgSwitchCase, NgClass],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  skills: string[] = [
    '.NET',
    'C#',
    'Angular',
    'Azure',
    'Azure Devops',
    'GitHub',
    'GitHub Actions',
    'Terraform',
    'Kubernetes',
    'Docker',
    'Dapr',
    'SQL'
  ]

  skillsImage: Record<string, string> = {
    '.NET': 'Skills/dotnet.png',
    'C#': 'Skills/c-sharp.png',
    'Angular': 'Skills/angular.png',
    'Azure': 'Skills/microsoft-azure.png',
    'Azure Devops': 'Skills/azure-devops.png',
    'GitHub': 'Skills/github.png',
    'GitHub Actions': 'Skills/githubactions.png',
    'Terraform': 'Skills/terraform.png',
    'Kubernetes': 'Skills/kubernetes.png',
    'Docker': 'Skills/docker.png',
    'Dapr': 'Skills/dapr.svg',
    'SQL': 'Skills/sql.png'
  };

  isDialogOpen: boolean = true;
  selectedSkill: string = 'C#';
  selectedSkillImage: string = '';

  openDialog(skill : string) {
    this.selectedSkill = skill;
    this.selectedSkillImage = this.skillsImage[skill];
    this.isDialogOpen = true;
    document.body.classList.add('no-scroll');
  }

  closeDialog() {
    this.isDialogOpen = false;
    document.body.classList.remove('no-scroll');
  }

  isLastSelectedSkill() {
    if (this.selectedSkill === this.skills[this.skills.length - 1]) {
      return true;
    }
    return false;
  }

  isFirstSelectedSkill() {
    if (this.selectedSkill === this.skills[0]) {
      return true;
    }
    return false;
  }

  previousSkill() {
    let currentSkillIndex = this.skills.indexOf(this.selectedSkill);
    if (currentSkillIndex > 0) {
      this.selectedSkill = this.skills[currentSkillIndex - 1];
      this.selectedSkillImage = this.skillsImage[this.selectedSkill];
    }
  }

  nextSkill() {
    let currentSkillIndex = this.skills.indexOf(this.selectedSkill);
    if (currentSkillIndex < this.skills.length - 1) {
      this.selectedSkill = this.skills[currentSkillIndex + 1];
      this.selectedSkillImage = this.skillsImage[this.selectedSkill]
    }
  }

}
