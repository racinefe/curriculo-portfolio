import { Component, signal } from '@angular/core';

//interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong:"Front-end Developer",
        p: "Frelancer | 2023 - Present",
      },
      text:"<p>Desenvolvimento de pequenos projetos Web para pequenas empresas e projetos pessoaisO cliente é muito importante, o cliente será seguido pelo cliente. Agora a proteína está na frente da franja. Mas a urna com flechas. Quem são os membros da operadora inteligente? A companhia aérea quer pagar o preço dos imóveis. Aenean sagittis arcu vel mauris convallis e pellentesque lectus eleifend. Donec feugiat auctor leo, ullamcorper auctor elit euismod eu. </p>"
    },
    {
      summary: {
        strong:"Produção Audiovisual ",
        p: "Prodigio Educação | Fev 2017 - Mar 2023"
      },
      text:"<p>Durante meu periodo na Prodigio Educação atuei com diversos projetos e produção de aulas aovivos e conteudos para internet.O cliente é muito importante, o cliente será seguido pelo cliente. Agora a proteína está na frente da franja. Mas a urna com flechas. Quem são os membros da operadora inteligente? A companhia aérea quer pagar o preço dos imóveis. Aenean sagittis arcu vel mauris convallis e pellentesque lectus eleifend. Donec feugiat auctor leo, ullamcorper auctor elit euismod eu.  </p>"
    },
    {
      summary: {
        strong:"",
        p: ""
      },
      text:""
    },
  ])
}
