import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'Angular-APP';
  putname = 'HTML & CSS'
  getName()
  {
    alert('Angular');
  }
  setName(name: any)
  {
      alert(name)
  }
  putName(name:any)
  {
    alert(name)
  }
}
