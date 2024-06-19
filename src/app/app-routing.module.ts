import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEbookComponent } from './_pages/create-ebook/create-ebook.component';
import { EbookListComponent } from './_pages/ebook-list/ebook-list.component';
import { UpdateEbookComponent } from './_pages/update-ebook/update-ebook.component';

const routes: Routes = [
  { path: 'create-ebook', component: CreateEbookComponent },
  { path: 'get-ebooks', component: EbookListComponent},
  { path: 'update-ebook/:id', component: UpdateEbookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
