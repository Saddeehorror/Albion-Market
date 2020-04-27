import { Component, OnInit, Output } from '@angular/core';
import { FilterService } from 'src/app/services/filters/filter.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
type;
categorie;
echant;
quality;
cities;

typeArr;
categorieArr;
citiesArr;

itemsArry;

@Output() response: EventEmitter <any> = new EventEmitter();
  constructor(private fs: FilterService) {
    this.getTypes();
    this.getCategories();
    this.getEnchants();
    this.getCities();
   }

  ngOnInit(): void {
  }

  getTypes() {
    this.fs.getTypes().subscribe(
      (data) => {
        this.type = data;
      }
    );
  }

  getCategories(){
    this.fs.getCategories().subscribe(
      (data) => {
        this.categorie = data;
      }
    );
  }

  getEnchants(){
    this.fs.getEnchants().subscribe(
      (data) => {
        this.echant = data;
      }
    );
  }
  getCities(){
    this.fs.getCities().subscribe(
      (data) => {
        this.cities = data;
      }
    );
  }





  makeRequest(){
  let request = '';
  let cities = '';
  let ciclo;

    if (this.typeArr) {
      if (this.categorieArr) {
        for (ciclo = 0; ciclo < this.typeArr.length; ciclo++) {
          for (let index = 0; index < this.categorieArr.length; index++) {
            request = request+this.categorieArr[index]+'_'+this.typeArr[ciclo]+',';


          }

        }
      }else{
        for ( ciclo = 0; ciclo < this.typeArr.length; ciclo++) {
          for (let index = 1; index < 9; index++) {
            request = request+'T'+index+'_'+this.typeArr[ciclo]+',';

          }

        }
      }
    }else{

    }

  if (this.citiesArr) {
      for (let index = 0; index < this.citiesArr.length; index++) {
        cities = cities + this.citiesArr[index] + ',';

      }
    } else {
      for (let index = 0; index < this.cities.length; index++) {
        cities = cities + this.cities[index].value + ',';
      }
    }



  this.serchItems(request, cities);



  }
  serchItems(request, cities){
    console.log(request);
    this.fs.getItems(request, cities).subscribe(
      (data)=>{
        this.response.emit(data);
      }
    );
  }












// @SECTION: SETS DE LOS FILTROS

setType(event){
    this.typeArr = event.value;
    this.makeRequest();
}

setCities(event){
    this.citiesArr = event.value;
    this.makeRequest();
}

setCategorie(event){
  this.categorieArr = event.value;
  this.makeRequest();
}






}
