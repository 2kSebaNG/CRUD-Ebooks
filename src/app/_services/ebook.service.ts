import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateEbook } from '../_interfaces/create-ebook';
import { environment } from 'src/environments/environment.development';
import { Observable, map } from 'rxjs';
import { Ebook } from '../_interfaces/ebook';

@Injectable({
  providedIn: 'root',
})
export class EbookService {
  baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  createEbook(ebook: CreateEbook): Observable<Object> {
    return this.http.post(`${this.baseUrl}/api/ebook`, ebook);
  }

  getEbook(): Observable<Ebook[]> {
    return this.http.get<Ebook[]>(`${this.baseUrl}/api/ebook`);
  }

  deleteEbook(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/api/ebook/${id}`);
  }

  updateEbook(id: number, ebook: Ebook): Observable<Object> {
    return this.http.put(`${this.baseUrl}/api/ebook/${id}`, ebook);
  }
}
