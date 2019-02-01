import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
// Import Http Client & Observable
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  // Tambah disini
  public items: any;
  // Tambah "public http: HttpClient" dibagian constructor
  constructor(public navCtrl: NavController, public http: HttpClient) {
    //memanggil method getData
    this.getData();
  }
  // buat method getData()
  getData() {
    let url = "http://test.pro/api/latihan";
    let data: Observable<any> = this.http.get(url);
    data.subscribe(result => {
      this.items = result;
      console.log(result);
    });
  }
}
