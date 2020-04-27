import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
url = 'https://demo2237192.mockable.io/';
  constructor(private http: HttpClient) { }


  getTypes(){
    return this.http.get(this.url+"Albiontypes").pipe(
      map(
        (data)=>{
          console.log(data);
          return data;
        }
      )
    );
  }

  getCategories(){
    return this.http.get(this.url+"Albioncategories").pipe(
      map(
        (data)=>{
          console.log(data);
          return data;
        }
      )
    );
  }
  getCities(){
    return this.http.get(this.url+"Albioncities").pipe(
      map(
        (data)=>{
          console.log(data);
          return data;
        }
      )
    );
  }

  getEnchants(){
    return this.http.get(this.url+"Albionenchants").pipe(
      map(
        (data)=>{
          return data;
        }
      )
    )
  }

  getItems(items,cities){
    // return this.http.get(`https://www.albion-online-data.com/api/v2/stats/prices/${items}?locations=${ciudades}`);
    console.log(`https://www.albion-online-data.com/api/v2/stats/prices/${items}?time-scale=1?locations=${cities}`);
    return this.http.get(`https://www.albion-online-data.com/api/v2/stats/prices/${items}?locations=${cities}?time-scale=1`);
  }





}
