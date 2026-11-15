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
      nome: 'Java',
      src: 'assets/icons/knowledge/java.svg',
      alt: 'Ícone do Java'
    },
    {
      nome: 'Spring Boot',
      src: 'assets/icons/knowledge/spring.svg',
      alt: 'Ícone do Spring Boot'
    },
    {
      nome: 'Angular',
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone do Angular'
    },
    {
      nome: 'TypeScript',
      src: 'assets/icons/knowledge/typescript.svg',
      alt: 'Ícone do TypeScript'
    },
    {
      nome: 'Ionic',
      src: 'assets/icons/knowledge/ionic.svg',
      alt: 'Ícone do Ionic'
    },
    {
      nome: 'Oracle',
      src: 'assets/icons/knowledge/oracle.svg',
      alt: 'Ícone do Oracle'
    },
    {
      nome: 'Docker',
      src: 'assets/icons/knowledge/docker.svg',
      alt: 'Ícone do Docker'
    },
    {
      nome: 'JavaScript',
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone do JavaScript'
    },
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
      nome: 'React',
      src: 'assets/icons/knowledge/react.svg',
      alt: 'Ícone do React'
    }
  ]);
}
