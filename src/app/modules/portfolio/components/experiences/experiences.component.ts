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
        p: "Freelance | 2023 - Presente",
      },
      text:`

              <p>Como desenvolvedor front-end freelancer, tenho trabalhado em projetos de desenvolvimento web para pequenas empresas e em projetos pessoais.</p>
              <br>
              <p>Minha atuação envolve a criação de sites responsivos e otimizados, garantindo uma experiência de usuário agradável e funcional.</p>
              <br>
              <p>Principais responsabilidades e realizações:</p>
              <br>
              <p>- Desenvolvimento de interfaces web utilizando HTML, CSS, JavaScript, Angular e React.</p>
              <p>- Personalização de estilos com SCSS para atender às necessidades específicas dos clientes.</p>
              <p>- Implementação de ícones SVG e outras técnicas para aprimorar a interface do usuário.</p>
              <p>- Colaboração com clientes para entender suas necessidades e fornecer soluções eficazes.</p>
              <p>- Testes e depuração de código para assegurar a funcionalidade e desempenho dos projetos.</p>
              <p> Durante este período, aprimorei minhas habilidades técnicas e de comunicação, sempre buscando entregar projetos de alta qualidade e atender às expectativas dos clientes.
               Cada projeto é uma oportunidade de aprendizado e crescimento na minha carreira como desenvolvedor.<br></p>

           `
    },
    {
      summary: {
        strong:"Produção Audiovisual ",
        p: "Prodígio Educação | Fev 2017 - Mar 2023"
      },
      text: `
              <p> Durante meu período na Prodígio Educação participei diversos projetos de produção de aulas ao vivo e conteúdos para internet.</p>
              <br>
              <p> Minha atuação na Prodígio Educação estava na criação dos eventos e de garantir a qualidade na transmissão ao vivo.</p>
              <br>
              <p> Principais responsabilidades e realizações:</p>
              <br>
              <p>- Criação dos eventos de transmissão na plataforma.</p>
              <p>- Transmissão com controle de corte e gravação através do sistema Vmix.</p>
              <p>- Edição de vídeo.</p>
              <p>- Montagem e preparação de set de gravação.</p>

              `
    },
    // {
    //   summary: {
    //     strong:"",
    //     p: ""
    //   },
    //   text:""
    // },
  ])
}
