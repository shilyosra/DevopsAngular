import { Component, OnInit } from '@angular/core';
import { Foyer } from '../models/foyer.model';
import { FoyerService } from '../services/foyer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-foyer',
  templateUrl: './update-foyer.component.html',
  styleUrls: ['./update-foyer.component.css']
})
export class UpdateFoyerComponent  implements OnInit {
  foyer!: Foyer;  // Single foyer for update
  idFoyer: string = ''; // ID of the foyer to be updated

  constructor(private foyerService: FoyerService, private route: ActivatedRoute) {
    // Initialize with a default empty object, assuming it will be loaded
   
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.foyerService.getFoyerById(id).subscribe(data => {
        this.foyer = data;
      }, error => {
        console.error('Error loading the foyer:', error);
      });
    }
  }

  loadFoyerById(): void {
    if (this.idFoyer) {
      this.foyerService.getFoyerById(this.idFoyer).subscribe(data => {
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
