import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { TextconvertComponent} from 'src/app/textconvert/textconvert.component';
// import {Text} from 'src/app/text.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  url = 'http://localhost:44442/';
public getvalue: any;
  public encoded!: string;
text!: string;

  constructor (
    public converter: TextconvertComponent,
  public http: HttpClient, @Inject('BASE_URL') public baseUrl: string){  }

  private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  public processingFlag = false;
  public enc: Stream = {
    perString: ''
  };
  public convertText() {
    this.processingFlag = true;
    this.converter.showEncoded(this.text).subscribe((data) => {
      console.log(data);
      this.getvalue = data;
    });
    //this.converter.getRepos().subscribe();
  }
  public convertMyText() {
    this.processingFlag = true;
    this.converter.showMyEncoded(this.text);
    //this.streamText()
    
  }
  cancel(){
    this.processingFlag = false;
  }
  streamText(text: string){
    return this.http.get<Stream>(this.baseUrl + 'textconvert/stream/'+text).subscribe(result => {
      this.enc = result;
    }, error => console.error(error));  }

}
type Stream = {
  perString: string
};
