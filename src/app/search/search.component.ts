import { Component, ViewChild } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  @ViewChild('paginator') paginator!:MatPaginator;
  dataSource:any= [];
  userData:any;
  selectedCountry:any = [];
  universities: any = [];
  otherCountry:any;
  searchCount:any= 0
  countryList:any = [
    { value: 'india',  country: 'India' },
    { value: 'USA', country: 'United States' },
    { value: 'UK', country: 'United Kingdom' },
    { value: 'AU', country: 'Australia' },
    { value: 'germany',  country: 'Germany' },
    { value: 'Japan',  country: 'Japan' },
    { value: 'France',  country: 'France' },
    { value: 'Brazil',  country: 'Brazil' },
    { value: 'China',  country: 'China' },
    { value: 'Canada',  country: 'Canada' },
    { value: 'other',  country: 'Other Country' }
  ]

  displayedColumns:any = [
    'name',
    'state-province',
    'domains',
  ];
constructor(public userServiceService:UserServiceService,
  private sanitizer: DomSanitizer,
){

}
ngOnInit(): void {
  this.userData = localStorage.getItem('name');
}

searchUniversities(){

  if(this.selectedCountry || this.otherCountry){
    this.selectedCountry = this.selectedCountry == 'other'? this.otherCountry: this.selectedCountry;
    console.log(this.selectedCountry);
    const searchCounts:any = parseInt(localStorage.getItem('searchCount')!) || 0;
    localStorage.setItem('searchCount', searchCounts + 1);
    this.searchCount = searchCounts + 1
    // this.searchCount++
    this.userServiceService.getdata(this.selectedCountry).subscribe((data) => {
          this.universities = data;
          this.dataSource = new MatTableDataSource(this.universities);  
          this.dataSource.paginator = this.paginator;
            },
      (error) => {
          console.error('Error fetching universities:', error);
      }
    );
  }

}


transform(url:any) {
  return this.sanitizer.bypassSecurityTrustResourceUrl(url);
}

}
