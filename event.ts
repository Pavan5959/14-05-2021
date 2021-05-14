import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'Angular-APP';
  myEvent(evt:any)
  {
    console.warn(evt)
  }
  myKeyup(evet1:any)
  {
    console.warn(evet1)
  }
  myKeyup1(evet2:any)
  {
    console.warn(evet2)
  }
  myKeydown(dwn:any)
  {
    console.warn(dwn)
  }
  myKeyEnter(entr:any)
  {
    console.warn(entr)
  }
  myKeySpace(spce:any)
  {
    console.warn(spce)
  }
  keyBlur(blr:any)
  {
    console.warn(blr)
  }
  over(ovr:any)
  {
    console.warn(ovr)
  }
  leave(lev:any)
  {
    console.warn(lev)
  }
}
