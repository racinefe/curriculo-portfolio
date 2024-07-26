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
      src: 'assets/img/projects/ProjetoGeradorSenha/ProjetoGeradorSenha.gif',
      alt: 'Projeto newpass-generator',
      title: 'Newpass-Generator',
      with: '150px',
      height:'150px',
      
      description: `<img src="assets/img/projects/ProjetoGeradorSenha/ProjetoGeradorSenha.png" alt='imágem do Projeto newpass-generator' class="img-custom-size" >
                    <img src="assets/img/projects/ProjetoGeradorSenha/ProjetoGeradorSenha2.png" alt='imágem do Projeto newpass-generator' class="img-custom-size" >
                    <img src="assets/img/projects/ProjetoGeradorSenha/ProjetoGeradorSenha3.png" alt='imágem do Projeto newpass-generator' class="img-custom-size" >
                    <p>
                      Este projeto é uma aplicação web desenvolvida com Angular que inclui um gerador de senhas e uma barra de progresso personalizada.
                       O gerador de senhas permite ao usuário gerar senhas fortes e copiá-las facilmente.
                        A barra de progresso é estilizada utilizando SCSS e Bootstrap para proporcionar uma melhor experiência visual.
                    </p>
                    <p>Tecnologias utilizadas - HTML| SCSS | BootStrap | Angular </p>
                   `,
      links: [
        {
          name: 'Conheça o Projeto',
          href: 'https://newpass-generator.netlify.app/',
        },
      ],
    },
    {
      src: 'assets/img/projects/ProjetoCadastro/ProjetoCadastro.gif',
      alt: 'Projeto Sistema de Matrícula',
      title: `Sistema de Matrícula`,
      with: '200px',
      height:'130px',
      description: `<img src="assets/img/projects/ProjetoCadastro/ProjetoCadastro.png" alt='imagem do Projeto Sistema de Matrícula' class="img-custom-size" >
                    <img src="assets/img/projects/ProjetoCadastro/ProjetoCadastro2.png" alt='imagem do Projeto Sistema de Matrícula' class="img-custom-size" >
                    <img src="assets/img/projects/ProjetoCadastro/ProjetoCadastro3.png" alt='imagem do Projeto Sistema de Matrícula' class="img-custom-size" >
                    <img src="assets/img/projects/ProjetoCadastro/ProjetoCadastro5.png" alt='imagem do Projeto Sistema de Matrícula' class="img-custom-size" >
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
      src: 'assets/img/projects/ProjetoToDoList/ProjetoToDoList.gif',
      alt: 'Projeto Lista-de-Tarefas',
      title: 'Lista de Tarefas',
      with: '230px',
      height:'130px',
      description: `<img src="assets/img/projects/ProjetoToDoList/ProjetoToDoList.png" alt='imagem do Projeto Projeto Lista-de-Tarefas' class="img-custom-size" >
                    <img src="assets/img/projects/ProjetoToDoList/ProjetoToDoList2.png" alt='imagem do Projeto Projeto Lista-de-Tarefas' class="img-custom-size" >
                    <img src="assets/img/projects/ProjetoToDoList/ProjetoToDoList3.png" alt='imagem do Projeto Projeto Lista-de-Tarefas' class="img-custom-size" >
                    <img src="assets/img/projects/ProjetoToDoList/ProjetoToDoList6.png" alt='imagem do Projeto Projeto Lista-de-Tarefas' class="img-custom-size" >
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
      src: 'assets/img/projects/ProjetoPokedex/ProjetoPokedex.gif',
      alt: 'Projeto Pokédex',
      title: 'Pokédex',
      with: '200px',
      height:'130px',
      
      description: `<img src="assets/img/projects/ProjetoPokedex/ProjetoPokedex1.png" alt='imagem do Projeto Pokédex' class="img-custom-size" >
                    <img src="assets/img/projects/ProjetoPokedex/ProjetoPokedex2.png" alt='imagem do Projeto Pokédex' class="img-custom-size" >
                    <img src="assets/img/projects/ProjetoPokedex/ProjetoPokedex3.png" alt='imagem do Projeto Pokédex' class="img-custom-size" >
                    <img src="assets/img/projects/ProjetoPokedex/ProjetoPokedex4.png" alt='imagem do Projeto Pokédex' class="img-custom-size" >
                    <img src="assets/img/projects/ProjetoPokedex/ProjetoPokedex7.png" alt='imagem do Projeto Pokédex' class="img-custom-size" >
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
      src: 'assets/img/projects/ProjetoMentor/ProjetoMentor.gif',
      alt: 'Projeto Newsletter sign-up',
      title: 'Newsletter sign-up',
      with: '200px',
      height:'130px',
      
      description: `<img src="assets/img/projects/ProjetoMentor/ProjetoMentor1.png" alt='imagem do Projeto Newsletter sign-up' class="img-custom-size" >
                    <img src="assets/img/projects/ProjetoMentor/ProjetoMentor2.png" alt='imagem do Projeto Newsletter sign-up' class="img-custom-size" >
                    <img src="assets/img/projects/ProjetoMentor/ProjetoMentor3.png" alt='imagem do Projeto Newsletter sign-up' class="img-custom-size" >

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
      src: 'assets/img/projects/ProjetoQrCode/ProjetoQrCode.gif',
      alt: 'Projeto Gerador de QrCode',
      title: 'Gerador de QrCode',
      with: '200px',
      height:'130px',
      
      description: `<img src="assets/img/projects/ProjetoQrCode/ProjetoQrCode2.png"  alt='imagem do Projeto Gerador de QrCode' class="img-custom-size" >
                    <img src="assets/img/projects/ProjetoQrCode/ProjetoQrCode3.png"  alt='imagem do Projeto Gerador de QrCode' class="img-custom-size" >
                    <img src="assets/img/projects/ProjetoQrCode/ProjetoQrCode5.png"  alt='imagem do Projeto Gerador de QrCode' class="img-custom-size" >
                    <img src="assets/img/projects/ProjetoQrCode/ProjetoQrCode6.png"  alt='imagem do Projeto Gerador de QrCode' class="img-custom-size" >
                    
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
