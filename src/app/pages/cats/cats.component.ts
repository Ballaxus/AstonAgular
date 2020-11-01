import { Component, OnInit } from '@angular/core';
import { Cat } from 'src/app/models/Cat';
import { CatService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {

cats: Cat[] =[]

  constructor(private catService: CatService) {
    this.catService.getAll().then(data=>{
      this.cats = data
    })
   }

  ngOnInit(): void {
  }

}
