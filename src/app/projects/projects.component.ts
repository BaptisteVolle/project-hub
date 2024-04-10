import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../project.service';
import { Project } from '../project';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})


export class ProjectsComponent {

  projectList: Project[] = [];
  projectService: ProjectService = inject(ProjectService);
  filteredProjectsList: Project[] = [];


  constructor() {
    this.projectList = this.projectService.getAllProjects();
    this.filteredProjectsList = this.projectList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredProjectsList = this.projectList;
      return;
    }
  
    this.filteredProjectsList = this.projectList.filter(
      project => project?.name.toLowerCase().includes(text.toLowerCase())
    );
  }
}
