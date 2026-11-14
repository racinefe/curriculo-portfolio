import { Component, signal } from '@angular/core';
import { Iknowledge } from '../../interface/iknowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss']
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<Iknowledge[]>([
    {
      nome: 'HTML',
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone do HTML'
    },
    {
      nome: 'Sass',
      src: 'assets/icons/knowledge/sass.svg',
      alt: 'Ícone do Sass'
    },
    {
      nome: 'JavaScript',
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone do JavaScript'
    },
    {
      nome: 'Angular',
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone do Angular'
    },
    {
      nome: 'Java',
      src: 'assets/icons/knowledge/java.svg',
      alt: 'Ícone do Java'
    },
    {
      nome: 'React',
      src: 'assets/icons/knowledge/react.svg',
      alt: 'Ícone do React'
    },
    {
      nome: 'Ionic',
      src: 'assets/icons/knowledge/ionic.svg',
      alt: 'Ícone do Ionic'
    }
  ]);
}
