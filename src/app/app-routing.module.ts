import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListingPageComponent} from "./components/listing-page/listing-page.component";
import {ListingDetailPageComponent} from "./components/listing-detail-page/listing-detail-page.component";
import {ContactPageComponent} from "./components/contact-page/contact-page.component";
import {EditListingPageComponent} from "./components/edit-listing-page/edit-listing-page.component";
import {MyListingsPageComponent} from "./components/my-listings-page/my-listings-page.component";
import {NewListingPageComponent} from "./components/new-listing-page/new-listing-page.component";

const routes: Routes = [
  {
    path:'',
    redirectTo: '/listings',
    pathMatch: 'full'
  },
  {
    path:'listings',
    component: ListingPageComponent,
    pathMatch: 'full'
  },
  {
    path:'listings/:id',
    component: ListingDetailPageComponent,
  },
  {
    path:'contact/:id',
    component: ContactPageComponent,
  },
  {
    path:'edit-listing/:id',
    component: EditListingPageComponent,
  },
  {
    path:'my-listings',
    component: MyListingsPageComponent,
    pathMatch: 'full'
  },
  {
    path:'new-listing',
    component: NewListingPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
