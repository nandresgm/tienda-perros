import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}/api/productos?populate=imagen`).pipe(
      map(response => response.data.map((product: any) => ({
        id: product.id,
        nombre: product.nombre,
        descripcion: product.descripcion,
        imagenes: product.imagen?.map((img: any) => `${this.apiUrl}${img.url}`) || []
      })))
    );
  }
}
