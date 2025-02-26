import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AGPractice';
student=[
  {name:'kapil',age:12,isEdit:false,buttoname:'edit'},
  {name:'jayesh',age:13,isEdit:false,buttoname:'edit'},
  {name:'piyush',age:10,isEdit:false,buttoname:'edit'}
]

button='show';
changed(std:any){

  if(std.isEdit===false&&std.buttoname==="edit"){
    std.isEdit=true;
    std.buttoname='add';

  }else{
    std.isEdit=false;
    std.buttoname='edit'
  }
  console.log(std);
}

}
