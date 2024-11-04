import { Component, OnInit } from '@angular/core';
import { Foyer } from '../models/foyer.model';
import { FoyerService } from '../services/foyer.service';

@Component({
  selector: 'app-update-foyer',
  templateUrl: './update-foyer.component.html',
  styleUrls: ['./update-foyer.component.css']
})
export class UpdateFoyerComponent  implements OnInit {
  foyer: Foyer;  // Single foyer for update
  id: string = ''; // ID of the foyer to be updated

  constructor(private foyerService: FoyerService) {
    // Initialize with a default empty object, assuming it will be loaded
    this.foyer = { idFoyer: '', nomFoyer: '', capaciteFoyer: 0 };
  }

  ngOnInit(): void {
    this.loadFoyerById();
  }

  loadFoyerById(): void {
    if (this.id) {
      this.foyerService.getFoyerById(this.id).subscribe(data => {
        this.foyer = data;
      }, error => {
        console.error('Error loading the foyer:', error);
      });
    }
  }

  updateFoyer(): void {
    this.foyerService.updateFoyer(this.foyer).subscribe(() => {
      console.log('Foyer updated successfully');
      // Optionally redirect or fetch all foyers again
    }, error => {
      console.error('Error updating foyer:', error);
    });
  }
}
