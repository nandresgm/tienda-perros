import { Component, OnInit } from '@angular/core';
import { DogService } from '../../services/dog.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dog-list',
  imports: [CommonModule],
  templateUrl: './dog-list.component.html',
  styleUrl: './dog-list.component.css'
})
export class DogListComponent implements OnInit {
  dogs: any[] = [];
  selectedDog: any = null;

  constructor(private dogService: DogService) { }

  ngOnInit(): void {

    this.dogService.getDogs().subscribe(dogs => {
      this.dogs = dogs;
    });
  }

  openModal(dog: any) {
    this.selectedDog = dog;
  }

  closeModal() {
    this.selectedDog = null;
  }

  getWhatsappLink(dogName: string): string {
    const phoneNumber = "573116590506"; // Reemplaza con tu número
    const message = `Hola, estoy interesado en ${dogName}`;
    return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  }
  
}
