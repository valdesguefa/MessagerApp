import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatSort, MatSortModule, MatSortHeader } from '@angular/material/sort'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialExampleModule} from '../../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { ContactListModule } from './contact-list/contact-list.module';
import { ContactsComponent } from './contact-list/contacts/contacts.component';
//import { DataTablesModule } from "angular-datatables";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContactListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
