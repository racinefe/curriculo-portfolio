import { Component, signal } from '@angular/core';

import { RouterModule } from '@angular/router';


import { MatDialogModule } from '@angular/material/dialog';
import { IExperiences } from '../modules/portfolio/interface/IExperiences.interface';




@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    RouterModule,
    MatDialogModule
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

  public arrayBlog = signal<IExperiences[]>([
    {
      summary: {
        strong: "Conceitos de Grid Layout",
        p: "| Mar 2023",
      },
      text: `
            <h1>Conceitos básicos de Grid Layout</h1>
            <p>
              O CSS Grid Layout é uma maneira de organizar os elementos na página de forma bem prática,
              criando uma "grade" tanto para partes grandes quanto pequenas do layout.
              Ele permite organizar tudo de forma bem organizada, usando linhas e colunas.
              Neste artigo, vou te dar uma introdução ao CSS Grid e ao vocabulário que usamos com ele.
              Depois, vou te explicar tudo em mais detalhes, então fica ligado!
            </p>
            <br>
            <h2>O que é grid?</h2>
            <p>
              O CSS Grid é como uma malha feita de linhas horizontais e verticais,
              que cria um layout organizado na página. Dentro dessa "grade", 
              você pode colocar os elementos do seu site, 
              respeitando as linhas que definem colunas e linhas.
            </p>
            <br>
            <p> Aqui estão algumas coisas que o Grid pode fazer:</p>
            <br>
            <h3>1. Dimensões Fixas ou Flexíveis:</h3>
            <p>Você pode definir tamanhos fixos, como em pixels, ou usar tamanhos flexíveis, 
                como porcentagens ou a unidade <code>"fr"</code>, 
                que se adapta ao espaço disponível.
            </p>
            <h3>2. Grids Adicionais:</h3>
            <p>
                Além do grid principal, você pode adicionar novas linhas e colunas para organizar conteúdos extras.
            </p>
            <h3>3. Posicionamento Preciso:</h3>
            <p>
                O Grid permite colocar os itens exatamente onde você quer, usando números para linhas, 
                nomes ou até regiões específicas. 
                E se não for possível definir a posição exata, 
                ele tem um algoritmo para ajustar os itens automaticamente.
            </p>
            <h3>4. Alinhamento:</h3>
            <p>
                O CSS Grid também dá controle total sobre o alinhamento, tanto dos itens dentro da grade quanto da própria grade em si.
            </p>
            <h3>5. Conteúdos sobrepostos:</h3>
            <p>
                Você pode colocar vários itens dentro de uma mesma célula do grid e até sobrepor áreas usando o z-index para controlar as camadas.
            </p>
            <br>
            <p>
                Combinando o CSS Grid com outras ferramentas, como o Flexbox, 
                dá pra criar layouts incríveis e complexos que antes eram impossíveis só com CSS. 
                Tudo começa criando um grid dentro de um container!
            </p>
            <br>
            <h2>Grid container</h2>
            <p>
              Cria-se um grid container com as declarações CSS <code>display: grid</code> ou <code>display: inline-grid</code> para um elemento da marcação.
               Assim declarando, todos os elementos filhos diretos daquele container se transformam em grid items.
            </p>
            <br>
              <h3>Exemplo de código:</h3>
              <p>Aqui está um exemplo simples.</P>
              <h2>HTML</h2>
              <pre><code>
                  < div class="wrapper" >
                    < div > Exemplo 01 < /div >
                    < div > Exemplo 02 < /div >
                    < div > Exemplo 03 < /div >
                    < div > Exemplo 04 < /div >
                    < div > Exemplo 05 < /div >
                  < /div >
              </code></pre>
              <h2>CSS</h2>
              <pre><code>
                .wrapper {
                  display: grid;
                }
                .wrapper > div {
                  border: 2px solid #ffa94d;
                  border-radius: 5px;
                  background-color: #ffd8a8;
                  padding: 1em;
                  color: #d9480f;
                }
              </code></pre>
            <br>
            <p>
              Depois de fazer isso, todos os filhos diretos da div.wrapper se tornam grid items. 
              Se você olhar no navegador, não vai ver diferença, porque, por padrão, 
              o Grid cria uma única coluna para acomodar os itens.
            </p>     
            <img src="assets/img/img-gridEx.png"  alt='imagem do grid de exemplo' class="img-custom" >        
            
          `
    },
    // {
    //   summary: {
    //     strong: "artigo #02 ",
    //     p: "| Mar 2023"
    //   },
    //   text: `
    //          <h1>Conceitos básicos de Grid Layout</h1>
    //         <p>
    //           O CSS Grid Layout é uma maneira de organizar os elementos na página de forma bem prática,
    //           criando uma "grade" tanto para partes grandes quanto pequenas do layout.
    //           Ele permite organizar tudo de forma bem organizada, usando linhas e colunas.
    //           Neste artigo, vou te dar uma introdução ao CSS Grid e ao vocabulário que usamos com ele.
    //           Depois, vou te explicar tudo em mais detalhes, então fica ligado!
    //         </p>
    //         <br>
    //         <h2>O que é grid?</h2>
    //         <p>
    //           O CSS Grid é como uma malha feita de linhas horizontais e verticais,
    //           que cria um layout organizado na página. Dentro dessa "grade", 
    //           você pode colocar os elementos do seu site, 
    //           respeitando as linhas que definem colunas e linhas.
    //         </p>
    //         <br>
              
    //           `
    // },
   
  ])
}
