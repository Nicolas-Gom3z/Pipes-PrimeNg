import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower:string = 'nicolas';
  public nameUpper:string = 'NICOLAS';
  public fullName:string = 'nIcoLAs gOMeZ';

  public customDate:Date = new Date();

}
