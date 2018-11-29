import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchFlightsService } from '../services/search-flights.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent implements OnInit {

  constructor(private searchFlightsService: SearchFlightsService) { }
  outputPreference = "Sort by Fare";
  isFlightsFound = false;
  areFlightsLoaded: Promise<boolean>;
  filteredFlights: any[];
  departureDate = '2013-01-01';
  currentPageNo = 1;
  isCurrencyCodeError = false;

  @ViewChild('form') searchFlightsForm: NgForm;

  ngOnInit() {
  }

  onSearch() {

    let selectedFlightClass;

    if((<HTMLInputElement>document.getElementById('Economy')).checked){
      selectedFlightClass = 'E';
    } else {
      selectedFlightClass = 'B';
    }

    const flightParams = {
      "departureLocation": this.searchFlightsForm.value.departureLocation,
      "arrivalLocation": this.searchFlightsForm.value.arrivalLocation,
      "departureDate": this.departureDate,
      "flightClass": selectedFlightClass,
      "seatAvailability": "Y",
      "outputPreference": this.outputPreference
    };

    this.searchFlightsService.searchFlights(flightParams)
                             .subscribe((response) => {
                               console.log(response.json());
                               this.filteredFlights = response.json();
                               this.isFlightsFound = true;
                               this.areFlightsLoaded = Promise.resolve(true);
                             },
                             (error) => {
                              this.isCurrencyCodeError = true;
                             });
  }

}
