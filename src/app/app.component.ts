import { Component, OnInit } from '@angular/core';
import { Foyer } from './models/foyer.model';
import { FoyerService } from './services/foyer.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',  // This is the root component selector
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  foyers: Foyer[] = [];
  newFoyer: Foyer = { idFoyer: '', nomFoyer: '', capaciteFoyer: 0 };

  constructor(private foyerService: FoyerService, private router: Router, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.loadFoyers()
    
  }

  loadFoyers(): void {
    const idFoyer = HttpParams
    this.foyerService.getAllFoyers().subscribe(data => {
      this.foyers = data;
    });
  }

  addFoyer(): void {
    this.foyerService.addFoyer(this.newFoyer).subscribe(foyer => {
      this.foyers.push(foyer); // Update the list after adding
      // Reset the form
      this.newFoyer = { idFoyer: '', nomFoyer: '', capaciteFoyer: 0 };
    }, error => {
      console.error('Error adding foyer:', error);
    });
  }

  deleteloadFoyers(id: string): void {
    this.foyerService.deleteFoyer(id).subscribe(() => {
      this.foyers = this.foyers.filter(foyer => foyer.idFoyer !== id);
      console.log(`Foyer with ID ${id} deleted successfully.`);
    }, error => {
      console.error('Error deleting foyer:', error);
    });
  }
  navigateToUpdate(foyerid : string):void {
    this.router.navigate(['/update-foyer/',foyerid])
  }
  
}
