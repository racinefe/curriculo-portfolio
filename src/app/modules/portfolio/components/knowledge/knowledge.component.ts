import { Component, signal } from '@angular/core';

//interface
import { Iknowledge } from '../../interface/iknowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<Iknowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone do html5'
    },
    {
      src: 'assets/icons/knowledge/sass.svg',
      alt: 'Ícone do sass'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone do JavaScript'
    },
    {
      src: 'assets/icons/knowledge/react.svg',
      alt: 'Ícone do React'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone do Angular'
    },
    {
      src: 'assets/icons/knowledge/java.svg',
      alt: 'Ícone do Java'
    },

  ])
}
