import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  aboutPatashala: any;

  ngOnInit(){
    this.aboutPatashala = "Accounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.\r\nAccounting for a better world\r\nIn todays rapidly evolving business landscape, the accountancy profession finds itself at the crossroads of various transformative forces. By using ethical judgement, combined with financial and business expertise, it’s the professional accountant who will guide organisations to do the right thing and help create a better world.";
  }
}
