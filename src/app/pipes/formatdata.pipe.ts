import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatdata'
})
export class FormatdataPipe implements PipeTransform {
  // default_size:number =200;
  devolver:string;
  
  transform(text:string, limit:string): any{
    // if (text != null){
    //   if(limit != null){
    //       return text.substring(0, limit)+ '...';
    //   }else{
    //     return text.substring(0,this.default_size) + '...';
    //   }
    // }
  if(!limit){
    this.devolver=text;
  }else{
    if(Number(limit)){
      this.devolver=text.substring(0,parseInt(limit));

    }
  }
  return this.devolver;
  }
}
