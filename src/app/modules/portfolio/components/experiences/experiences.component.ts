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
        strong: "Full stack Developer",
        p: "Freelance | 2022 - Presente",
      },
      text: `
        <p>Como desenvolvedor Full stack, tenho trabalhado em diversos projetos para pequenas empresas e projetos pessoais.</p>
        <ul>
          <b>API de Gerenciamento de Usuários:</b>
            <li> CRUD completo </li>
            <li> Endpoints REST </li>
            <li>  Banco: H2 e MySQL </li>
            <li> Tecnologias: Spring Boot, Spring Data JPA, Postman </li>
            <li> Extras: validação com @Valid, tratamento de erros (ExceptionHandler) </li>
        </ul>
        <ul>
          <b>Sistema de Cadastro de Produtos - (Full stack):</b>
            <li> CRUD + categorias </li>
            <li> Layout  do sistema com Angular </li>
            <li> Relacionamento entre entidades (ex: Produto ↔ Categoria) </li>
            <li>  Banco: PostgreSQL </li>
        </ul>
        <ul>
          <b>Sistema de Gestão Escolar (Instrutor, Aluno, Turma):</b>
            <li> CRUD completo com relacionamento em banco de dados </li>
            <li> Filtros por turma, notas e instrutor </li>
            <li> API documentada e segura com JWT </li>
            <li> front-end integrado com Angular e Ionic </li>
        </ul>
        <ul>
          <b>E-commerce API (Carrinho de Compras):</b>
            <li> CRUD de produtos, usuários e pedidos </li>
            <li> Carrinho de compras dinâmico </li>
            <li>  Microsserviços: separando produtos, usuários e pagamentos </li>
            <li> API documentada e segura com JWT </li>
        </ul>

      `
    },
    {
      summary: {
        strong: " Produção de Conteúdo ",
        p: "Prodígio Educação | 2017 - 2023"
      },
      text: `
        <ul>
          <b> Durante meu período na Prodígio Educação participei de diversos projetos
 de produção de aulas ao vivo e conteúdos para internet.</b>
            <li>  Transmissão com controle de corte e gravação </li>
            <li> Linha de desenvolvimento e análise de rotinas </li>
            <li> Edição de vídeo </li>
            <li> Montagem e preparação de set de gravação </li>
        </ul>
      `
    },
    {
      summary: {
        strong: " Produção de Conteúdo ",
        p: " ProFuturo | Freelancer"
      },
      text: `
        <ul>
          <b>  Produção de aulas ao vivo e conteúdos Gravados.</b>
            <li>  Transmissão ao vivo </li>
            <li> Controle e rotina de gravação </li>
            <li> Edição de vídeo </li>

        </ul>
      `
    },
  ]);

  toggleExperience(index: number) {
    this.activeIndex = this.activeIndex === index ? -1 : index;
  }
}
