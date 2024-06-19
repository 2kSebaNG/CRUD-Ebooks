import { Ebook } from './../../_interfaces/ebook';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CreateEbook } from 'src/app/_interfaces/create-ebook';
import { EbookService } from 'src/app/_services/ebook.service';

@Component({
  selector: 'app-ebook-list',
  templateUrl: './ebook-list.component.html',
  styles: [
  ]
})
export class EbookListComponent implements OnInit{

  ebooks: Ebook[] = [];
  errorMessage = '';

  constructor(private ebookService: EbookService) { }

  ngOnInit(): void {
    this.getEbooks();
  }

  getEbooks(){
    this.ebookService.getEbook().subscribe({
      next: (result: any) => {
        this.ebooks = result;
        console.log(this.ebooks);
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

  deleteEbook(id: number){
    this.ebookService.deleteEbook(id).subscribe({
      next: () => {
        this.getEbooks();
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
