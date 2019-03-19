import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  fullData:any[];
  gridData: any[];

  private url = 'https://api.myjson.com/bins/kez8a'; 
  constructor(private http: Http, private router:Router) {
    http.get(this.url).subscribe(response =>{ 
      this.fullData= response.json().jobsfeed;      
      this.gridData=this.fullData;
    });
  }
 
  fetch(id){
    this.router.navigate(['/view',id]);
  }

  filterLocation(val)
  { 
    if(val != "")   
    { 
      this.gridData = this.fullData.filter(({location}) => {
        let check = location as String;
        return check.toLowerCase().includes(val);
        });
    }
    else{
      this.gridData=this.fullData;
    }
  }

  filterSkills(val)
  { 
    if(val != "")   
    { 
      this.gridData = this.fullData.filter(({skills}) => {
        let check = skills as String;
        return check.toLowerCase().includes(val);
        });
    }
    else{
      this.gridData=this.fullData;
    }
  }
}
