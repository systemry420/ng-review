import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-r-form',
  templateUrl: './r-form.component.html',
  styleUrls: ['./r-form.component.css']
})
export class RFormComponent implements OnInit {

  nameField: FormControl;
  phoneField: FormControl;
  name = '';
  phone = '';
  list: any[] = [
    {name: 'a', phone: 'a'}
  ]
  
  constructor() {
    this.nameField = new FormControl()
    this.phoneField = new FormControl()

  }

  ngOnInit(): void {
    this.nameField.valueChanges
      .subscribe(name => {
        this.name = name
      })

    this.phoneField.valueChanges
    .subscribe(phone => {
      this.phone = phone
    })
  }
  
  submit() {
    this.list.push({ name: this.name, phone: this.phone})
    this.nameField.value('')
    this.phoneField.value('')
  }
}
