import { Ebook } from './../../_interfaces/ebook';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EbookService } from 'src/app/_services/ebook.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-ebook',
  templateUrl: './update-ebook.component.html',
  styleUrls: []
})
export class UpdateEbookComponent implements OnInit{

  updateEbookForm : FormGroup = new FormGroup({});
  errorMessage: string = '';
  id:number = 0;
  foundedEbook: Ebook = {
      id: 0,
      title: '',
      author:'',
      genre: '',
      format: '',
      price: 0,
      stock: 0,
      isAvailable: true
  }

  ebookList : Ebook[] = [];

  updatedEbook: Ebook = {
    id: 0,
    title: '',
    author:'',
    genre: '',
    format: '',
    price: 0,
    stock: 0,
    isAvailable: true
  }

  constructor(private fb:FormBuilder,
    private ebookService: EbookService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = Number(this.router.url.split('/')[2]);
    this.initializeForm();
  }

  initializeForm() {
    this.updateEbookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      genre: ['', Validators.required],
      format: ['', Validators.required],
      price: [0, Validators.required]
    });
  }

  updateEbook(){
    this.ebookService.updateEbook(this.id, this.updateEbookForm.value).subscribe({
      next: () => {
        this.router.navigateByUrl('get-ebooks');
      },
      error: (result) => {
        if (typeof result.error === 'string') {
          this.errorMessage = result.error;
          console.log(this.errorMessage);
        } else {
          this.errorMessage = 'Intente nuevamente';
        }
      },
    });
  }

}
