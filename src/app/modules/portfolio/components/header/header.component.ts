import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.startTypingAnimation();
  }

  startTypingAnimation() {
    const nameElement = document.querySelector<HTMLElement>('.animated-name');
    
    if (nameElement) {
      const fullName = 'Racine Fellipe';
      const originalText = fullName.split(' ')[1] + ' </>'; // Acrescentar texto depois de 'Fellipe'
      nameElement.textContent = fullName.split(' ')[0] + ' '; // Acrescentar texto depois de 'Racine '

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
