import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-textconvert',
  templateUrl: './textconvert.component.html',
  styleUrls: ['./textconvert.component.css']
})
export class TextconvertComponent implements AfterViewInit {

  constructor(private http: HttpClient,@Inject('BASE_URL') public baseUrl: string) { }
  
  public enc: Object = {
    final: ''
    };
  public showenc: Array<string> = [];
  public mess: Array<string> = [];
  public c: string = '';
  public i: number = 0;
  public selectedArray : Array<string>= []
  text!: string;
  ngAfterViewInit(): void {
    //this.showMyEncoded(this.text);
  }
  showMyEncoded (text: string){
    return this.http.get<Object>(this.baseUrl + 'textconvert/convert/'+text).subscribe(result => {
      this.c = '';
      this.enc = result;
      this.mess = this.enc.final.split('') 
      // for (this.i = 0; this.i < this.mess.length; this.i++) {
      //   (() => {
      //  this.c += this.mess[this.i];
      //   setTimeout( () => {
      //       console.log(this.c);
      //     }, 5000);
      //   })();
      // }
      setInterval(() =>  {
        if(this.i == this.mess.length)
        return;
        this.c += this.mess[this.i]
        this.selectedArray.push(this.c);
        this.i++;
      }, 3000);
    } ,    
    error => console.error(error));
  }

}
type Object = {
  final: string,
};