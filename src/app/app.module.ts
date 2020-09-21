import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { RecentConnectionsComponent } from './components/recent-connections/recent-connections.component';
import { AddDatabaseComponent } from './components/add-database/add-database.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/home/services/services.component';
import { DraftsComponent } from './components/home/drafts/drafts.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import { UserManagementComponent } from './components/user-management/user-management.component';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    RecentConnectionsComponent,
    AddDatabaseComponent,
    HomeComponent,
    ServicesComponent,
    DraftsComponent,
    UserManagementComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,MatTabsModule,MatMenuModule,MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
