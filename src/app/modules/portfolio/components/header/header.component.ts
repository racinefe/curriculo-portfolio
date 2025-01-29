import { Component, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatCardModule,],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class HeaderComponent implements AfterViewInit {
  longText = `Olá! Eu sou Racine Fellipe, um desenvolvedor de software, apaixonado por tecnologia e sempre em busca de aprender mais.
              Minha jornada na programação começou recentemente, mas já adquiri conhecimento em várias áreas do desenvolvimento Font-end e back-end.`;
  ngAfterViewInit() {
    this.startTypingAnimation();
  }

  startTypingAnimation() {
    const nameElement = document.querySelector<HTMLElement>('.animated-name');

    if (nameElement) {
      const fullName = ' ';
      const originalText = fullName.split(' ')[1] + 'Software Developer</>'; // Acrescentar texto depois de 'Fellipe'
      nameElement.textContent = fullName.split('')[0] + ' Olá, eu Sou Racine Felipe, '; // Acrescentar texto depois de 'Racine '

      let currentIndex = 0;

      const type = () => {
        if (currentIndex < originalText.length) {
          nameElement.textContent = (nameElement.textContent ?? '') + originalText.charAt(currentIndex);
          currentIndex++;
          setTimeout(type, 200);
        } else {
          setTimeout(erase, 1200);
        }
      };

      const erase = () => {
        if (currentIndex > 0) {
          nameElement.textContent = (nameElement.textContent ?? '').slice(0, -1);
          currentIndex--;
          setTimeout(erase, 200);
        } else {
          setTimeout(type, 1200);
        }
      };

      // Começa a animação de digitação
      type();
    }
  }
}
