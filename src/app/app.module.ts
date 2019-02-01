import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";

import { AboutPage } from "../pages/about/about";
import { ContactPage } from "../pages/contact/contact";
import { HomePage } from "../pages/home/home";
import { TabsPage } from "../pages/tabs/tabs";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

// Tambah disini "Saat mengambil API harus ada di mode produksi"
import { HttpClientModule } from "@angular/common/http";
import { enableProdMode } from "@angular/core";
enableProdMode();
// Akhir tambah disini
@NgModule({
  declarations: [MyApp, AboutPage, ContactPage, HomePage, TabsPage],
  // dibagian imports tambah "HttpClientModule"
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(MyApp)],

  bootstrap: [IonicApp],
  entryComponents: [MyApp, AboutPage, ContactPage, HomePage, TabsPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
