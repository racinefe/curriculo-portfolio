import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent {
  public activeIndex = 0;
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Desenvolvedor Full Stack',
        p: 'ZELLO | Nov/2025 - atual',
      },
      text: `
        <p>SIVEP Gripe V3, sistema governamental gerenciado pelo DATASUS para vigilância epidemiológica em todo o território nacional.</p>
        <ul>
          <li>Interfaces em Angular e Ionic</li>
          <li>Microsserviços Java/Spring Boot por domínio (fichas, domínio, agregados e relatórios), integrados ao front via BFF</li>
          <li>Cadastros, consulta de fichas, regras de negócio e histórico de alterações</li>
          <li>Controle de acesso por perfil e escopo territorial</li>
          <li>Esteira de deploy com ambientes de Desenvolvimento, Homologação, Treinamento e Produção</li>
        </ul>
        <p>Tecnologias: Java, Spring Boot, Angular, Ionic, TypeScript, APIs REST e Oracle.</p>
      `
    },
    {
      summary: {
        strong: 'Produção de Conteúdo',
        p: 'Prodígio Educação | 2017 - 2023'
      },
      text: `
        <p>Produção de aulas ao vivo e conteúdos digitais.</p>
        <ul>
          <li>Transmissão com controle de corte e gravação</li>
          <li>Linha de desenvolvimento e análise de rotinas</li>
          <li>Edição de vídeo</li>
          <li>Montagem e preparação de set de gravação</li>
        </ul>
      `
    },
    {
      summary: {
        strong: 'Produção de Conteúdo',
        p: 'ProFuturo | Freelancer'
      },
      text: `
        <p>Edição de vídeos e operação de transmissões ao vivo para aulas e conteúdos gravados.</p>
        <ul>
          <li>Transmissão ao vivo</li>
          <li>Controle e rotina de gravação</li>
          <li>Edição de vídeo</li>
        </ul>
      `
    },
  ]);

  toggleExperience(index: number) {
    this.activeIndex = this.activeIndex === index ? -1 : index;
  }
}
