import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { generate } from 'rxjs';
import { CreateEbook } from '../../_interfaces/create-ebook';
import { EbookService } from 'src/app/_services/ebook.service';

@Component({
  selector: 'app-create-ebook',
  templateUrl: './create-ebook.component.html',
  styles: [
  ]
})

export class CreateEbookComponent implements OnInit {

  newEbookForm : FormGroup = new FormGroup({});
  errorMessage: string = '';

  constructor(private fb: FormBuilder,
              private router: Router,
              private ebookService: EbookService
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.newEbookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      genre: ['', Validators.required],
      format: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  createEbook(){
    this.ebookService.createEbook(this.newEbookForm.value).subscribe({
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
