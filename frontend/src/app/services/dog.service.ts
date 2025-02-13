import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }
  
  getDogs(): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}/api/cachorros?populate=*`).pipe(
      map(response => response.data.map((dog: any) => ({
        id: dog.id,
        raza: dog.Raza,
        fechaNacimiento: dog.FechaNacimiento,
        precio: dog.Precio,
        fotoPrincipal: `${this.apiUrl}${dog.FotoPrincipal.url}`,
        fotosPadres: dog.FotoPadres?.map((img: any) => `${this.apiUrl}${img.url}`) || []
      })))
    );
  }
}
