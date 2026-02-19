import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { MyTranslateService } from '../../../services/myTranslate/my-translate.service';

@Component({
  selector: 'app-footer',
  imports: [TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {

}
