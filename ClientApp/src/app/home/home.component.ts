import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { TextconvertComponent} from 'src/app/textconvert/textconvert.component';
// import {Text} from 'src/app/text.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
public getvalue: any;
  public encoded!: string;
text!: string;

  constructor (
    public converter: TextconvertComponent,
  public http: HttpClient, @Inject('BASE_URL') public baseUrl: string){  }

  public doneFlag = false;
  public processingFlag = false;
  public convertMyText() {
    this.processingFlag = true;
    this.converter.showMyEncoded(this.text);
  }
  cancel(){
    this.processingFlag = false;
  }
}
