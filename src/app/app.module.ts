import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingPageComponent } from './components/listing-page/listing-page.component';
import { ListingDetailPageComponent } from './components/listing-detail-page/listing-detail-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { MyListingsPageComponent } from './components/my-listings-page/my-listings-page.component';
import { NewListingPageComponent } from './components/new-listing-page/new-listing-page.component';
import { EditListingPageComponent } from './components/edit-listing-page/edit-listing-page.component';
import { ListingDataFormComponent } from './forms/listing-data-form/listing-data-form.component';
import { NavBarComponent } from './forms/nav-bar/nav-bar.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    ListingPageComponent,
    ListingDetailPageComponent,
    ContactPageComponent,
    MyListingsPageComponent,
    NewListingPageComponent,
    EditListingPageComponent,
    ListingDataFormComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
