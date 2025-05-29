import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent {
  public activeIndex = 0;
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "Front-end Developer",
        p: "Freelance | 2023 - Presente",
      },
      text: `
        <p>Como desenvolvedor front-end freelancer, tenho trabalhado em projetos de desenvolvimento web para pequenas empresas e em projetos pessoais.</p>
        <ul>
          <li>Desenvolvimento de interfaces web utilizando HTML, CSS, JavaScript, Angular e React</li>
          <li>Personalização de estilos com SCSS para atender às necessidades específicas dos clientes</li>
          <li>Implementação de ícones SVG e outras técnicas para aprimorar a interface do usuário</li>
          <li>Colaboração com clientes para entender suas necessidades e fornecer soluções eficazes</li>
          <li>Testes e depuração de código para assegurar a funcionalidade e desempenho dos projetos</li>
        </ul>
        <p>Durante este período, aprimorei minhas habilidades técnicas e de comunicação, sempre buscando entregar projetos de alta qualidade e atender às expectativas dos clientes.</p>
      `
    },
    {
      summary: {
        strong: "Produção Audiovisual",
        p: "Prodígio Educação | Fev 2017 - Mar 2023"
      },
      text: `
        <p>Durante meu período na Prodígio Educação participei diversos projetos de produção de aulas ao vivo e conteúdos para internet.</p>
        <p>Minha atuação na Prodígio Educação estava na criação dos eventos e de garantir a qualidade na transmissão ao vivo.</p>
        <ul>
          <li>Criação dos eventos de transmissão na plataforma</li>
          <li>Transmissão com controle de corte e gravação através do sistema Vmix</li>
          <li>Edição de vídeo</li>
          <li>Montagem e preparação de set de gravação</li>
        </ul>
      `
    },
  ]);

  toggleExperience(index: number) {
    this.activeIndex = this.activeIndex === index ? -1 : index;
  }
}
