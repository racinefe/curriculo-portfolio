import { Component, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements AfterViewInit {
  longText = `Desenvolvedor Full Stack com formação em Análise e Desenvolvimento de Sistemas e atuação no ciclo completo de desenvolvimento de software com Java, Spring Boot, Angular e Ionic. Experiência na arquitetura e sustentação de sistemas, com forte domínio em integração de serviços, regras de negócio, bancos de dados relacionais e controle de acesso.`;

  ngAfterViewInit() {
    const nameElement = document.querySelector<HTMLElement>('.animated-name');
    if (!nameElement) {
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nameElement.textContent = 'Olá, eu sou Racine';
      return;
    }

    this.startTypingAnimation(nameElement);
  }

  startTypingAnimation(nameElement: HTMLElement) {
    const greetings = 'Olá, eu sou Racine';
    const role = 'Full stack Developer ';

    nameElement.textContent = '';
    let currentIndex = 0;
    let isTypingGreetings = true;

    const type = () => {
      if (isTypingGreetings && currentIndex < greetings.length) {
        nameElement.textContent = (nameElement.textContent || '') + greetings.charAt(currentIndex);
        currentIndex++;
        setTimeout(type, 100);
      } else if (isTypingGreetings) {
        isTypingGreetings = false;
        currentIndex = 0;
        setTimeout(() => {
          nameElement.textContent = '';
          setTimeout(type, 500);
        }, 2000);
      } else if (currentIndex < role.length) {
        nameElement.textContent = (nameElement.textContent || '') + role.charAt(currentIndex);
        currentIndex++;
        setTimeout(type, 100);
      } else {
        setTimeout(() => {
          nameElement.textContent = '';
          currentIndex = 0;
          isTypingGreetings = true;
          setTimeout(type, 500);
        }, 3000);
      }
    };

    type();
  }
}
