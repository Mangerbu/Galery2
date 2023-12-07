import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Photo } from './interfaces';
import { UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Galery2';
  photos: Photo[] = [];

  modelForm = this._fb.group({
    query: [null, Validators.required],
    color: []
  })

  colors = [
    'black',
    'white',
    'yellow',
    'orange',
    'red',
    'purple',
    'magenta',
    'green',
    'teal',
    'blue'
  ]

  constructor(private _api: ApiService, private _fb: UntypedFormBuilder) {}

  ngOnInit(): void {
    this._api.getPhotos().subscribe(x =>{
      this.photos = x;
    });
  }

  search() {
    if (this.modelForm.valid){
      this._api.search(this.modelForm.value.query).subscribe(x =>{
        this.photos = x.results;
      })
    }          
  }

}
