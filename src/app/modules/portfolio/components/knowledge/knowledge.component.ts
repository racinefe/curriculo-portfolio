import { Component, signal } from '@angular/core';
// Interface
import { Iknowledge } from '../../interface/iknowledge.interface';
// Angular Material
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [MatProgressBarModule],
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss']
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<Iknowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone do html5',
      progress: 80
    },
    {
      src: 'assets/icons/knowledge/sass.svg',
      alt: 'Ícone do sass',
      progress: 70
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone do JavaScript',
      progress: 80
    },
    {
      src: 'assets/icons/knowledge/react.svg',
      alt: 'Ícone do React',
      progress: 35
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone do Angular',
      progress: 75
    },
    {
      src: 'assets/icons/knowledge/java.svg',
      alt: 'Ícone do Java',
      progress: 35
    }
  ]);
}
