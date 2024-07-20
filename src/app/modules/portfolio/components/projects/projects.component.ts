import { Component, inject, signal } from '@angular/core';

//interface
import { IProjects } from '../../interface/IProjects.interface';
//material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
//Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
//DiaLog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog)
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/ProjetoCadastro.png',
      alt: 'Projeto Sistema de Matrícula',
      title: `Sistema de Matrícula`,
      with: '120px',
      height:'91px',
      description: `<img src="assets/img/projects/ProjetoCadastro.png" class="img-custom-size" >
                    <p>Projeto Full Stack de matrícula, utilizando o Firebase como banco de dados para armazenamento,
                       o projeto possui todas as funcionalidades de um GRUD (create, read, update e delete).
                    </p>
                    
                    <p>Tecnologias utilizadas - HTML| CSS |JavaScript | React.js | Vite | Node.js</p>
                   `,
      links: [
        {
          name: 'Conheça o Projeto',
          href: 'https://sistema-d-matricula.netlify.app/',
        },
      ],
    },
    {
      src: 'assets/img/projects/ProjetoToDoList.png',
      alt: 'Projeto Lista-de-Tarefas',
      title: 'Lista de Tarefas',
      with: '120px',
      height:'91px',
      description: `<img src="assets/img/projects/ProjetoToDoList.png" class="img-custom-size" >
                    <p>Projeto web, onde criei um to-do list, o projeto possui todas as funcionalidades do GRUD (create, read, update e delete),
                       além de um checklist interativo.
                    </p>
                    <p>Tecnologias utilizadas - HTML| CSS |JavaScript </p>
                   `,
      links: [
        {
          name: 'Conheça o Projeto',
          href: 'https://pjlistadetarefas.netlify.app/'
        },
      ],
    },
    {
      src: 'assets/img/projects/ProjetoMentor.png',
      alt: 'Projeto Newsletter sign-up',
      title: 'Newsletter sign-up',
      with: '120px',
      height:'91px',
      
      description: `<img src="assets/img/projects/ProjetoMentor.png" class="img-custom-size" >
                    <p>Projeto web, onde cumpri o desafio de construir um formulário de boletim informativo e fazê-lo parecer o mais próximo possível do design.</p>
                    <p>O desafio foi retirado do Frontend Mentor: <a href="https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv" target="_blank" class="btn btn-primary">Pagina do desafio</a></p>
                    <p>Tecnologias utilizadas - HTML| CSS |JavaScript | React | vite</p>
                   `,
      links: [
        {
          name: 'Conheça o Projeto',
          href: 'https://pjnewslettersign-up.netlify.app/',
                      
        },
        
      ],
    },
    {
      src: 'assets/img/projects/ProjetoPokedex.png',
      alt: 'Projeto Pokédex',
      title: 'Pokédex',
      with: '120px',
      height:'91px',
      
      description: `<img src="assets/img/projects/ProjetoPokedex.png" class="img-custom-size" >
                    <p>Projeto web, onde criei um Pokédex interativo sendo possível pesquisar através do nome de um Pokémon ou do ID.
                       O projeto Foi utilizado para meu estudo sobre consumo de APIs.
                    </p>
                    <p>Tecnologias utilizadas - HTML| CSS |JavaScript </p>
                   `,
      links: [
        {
          name: 'Conheça o Projeto',
          href: 'https://pjpokedex.netlify.app/',
        },
      ],
    },
    {
      src: 'assets/img/projects/ProjetoQrCode.png',
      alt: 'Projeto Gerador de QrCode',
      title: 'Gerador de QrCode',
      with: '110px',
      height:'130px',
      
      description: `<img src="assets/img/projects/ProjetoQrCode.png" class="img-custom-size" >
                    <p>Projeto web, onde criei um Gerador de QR code interativo, sendo possível ao usuário digitar um link e a aplicação gera  um QR code correspondente na tela,
                       também tendo a possibilidade de baixado o QR gerado, como um arquivo de imagem.
                      O projeto Foi utilizado para meu estudo sobre consumo de API e utilização da biblioteca React.
                    </p>
                    <p>Tecnologias utilizadas - HTML| CSS |JavaScript | React | vite </p>
                   `,
      links: [
        {
          name: 'Conheça o Projeto',
          href: 'https://pjqrcode.netlify.app/',
        },
      ],
    },
    
    
   
  ]);

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent,{
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
