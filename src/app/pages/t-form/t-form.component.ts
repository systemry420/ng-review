import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/Person.model';

@Component({
  selector: 'app-t-form',
  templateUrl: './t-form.component.html',
  styleUrls: ['./t-form.component.css']
})
export class TFormComponent implements OnInit {

  person = new Person(1, '', '')

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    
    console.log(this.person);
    
  }

}
