import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular course';

  onLogoClicked(){
    alert("ok");
  }

  onKeyUp(newTitle:string){
    this.title = newTitle;
  }
}
