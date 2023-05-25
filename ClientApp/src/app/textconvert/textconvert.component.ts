import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-textconvert',
  templateUrl: './textconvert.component.html',
  styleUrls: ['./textconvert.component.css']
})
export class TextconvertComponent implements OnInit {

  constructor(private http: HttpClient,@Inject('BASE_URL') public baseUrl: string) { }
  private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  // public encodedText: EncodedText[] = [];
  
  public enc: Object = {
    final: ''
  };
  public showenc: Array<string> = [];
  public mess: Array<string> = [];
  public c: string = '';
  public cs: string = '';
  public i: number = 0;
  ngOnInit(): void {
  }
  showEncoded (plainText: string){
    return this.http.post(this.baseUrl + 'textconvert',
            { plainText },
            this._options);
  }
  showMyEncoded (text: string){
    // return this.http.get<EncodedText>(this.baseUrl + 'textconvert/convert/'+text);
    return this.http.get<Object>(this.baseUrl + 'textconvert/convert/'+text).subscribe(result => {
      this.c = '';
      this.enc = result;
      this.mess = this.enc.final.split('') 
      for (this.i = 0; this.i < this.mess.length; this.i++) {
        (() => {
       this.c += this.mess[this.i];
        setTimeout( () => {
            console.log(this.c);
          }, 5000);
        })();
      }
      this.cs= this.c;
    //   this.mess.forEach(element => {
    //     this.c += element;
    //     this.showText(this.c);

    // });
    }, error => console.error(error));
  }
  showText(text: string){
    setTimeout(() => {
      console.log(text)
      this.cs = text;
    }), 5000
    //Math.floor(Math.random() * 1000)
  }
}
// interface EncodedText {
//   Final: string;
// }
type Object = {
  final: string
};