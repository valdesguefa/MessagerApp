import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts/contacts.component';

import { MatSort, MatSortModule, MatSortHeader } from '@angular/material/sort'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialExampleModule} from '../../../material.module';

import { BrowserModule } from '@angular/platform-browser';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    ContactsComponent,
  ],
  imports: [
    CommonModule,

    MatFormFieldModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MaterialExampleModule,

    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  exports:[
    ContactsComponent,
  ],
})
export class ContactListModule { }
