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
  longText = `Sou desenvolvedor com grande entusiasmo por tecnologia e constante busca por evolução profissional.
              Com sólida experiência em diversas áreas do desenvolvimento Full stack, Proficiente em Java e Angular, visando contribuindo para a inovação e crescimento.`;

  ngAfterViewInit() {
    this.startTypingAnimation();
  }

  startTypingAnimation() {
    const nameElement = document.querySelector<HTMLElement>('.animated-name');

    if (nameElement) {
      const greetings = "Olá, eu sou Racine";
      const role = "Full stack Developer " ;

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
}
