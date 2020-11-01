import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CatService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

catForm: FormGroup;

  constructor(private formbuilder: FormBuilder,
    private catService: CatService
    ) { 
    this.catForm = this.formbuilder.group({
      nom:[''],
      age:[''],
      race:[''],
      vivant:['']

    })
  }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.catForm.value);
    this.catService.create(this.catForm.value).then(data=>data.json()).then(console.log);
  }
}
