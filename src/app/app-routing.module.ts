import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDatabaseComponent } from './components/add-database/add-database.component';
import { HomeComponent } from './components/home/home.component';
import { RecentConnectionsComponent } from './components/recent-connections/recent-connections.component';
import { LayoutComponent } from './layout/layout/layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'recent', component: RecentConnectionsComponent},
  { path: 'add-database', component: AddDatabaseComponent},
  {
    path: 'home', component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
