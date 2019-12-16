import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SettingsComponent } from './settings/settings.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [
  {path: "", component: MainComponent},
  {path: "settings", component: SettingsComponent},
  {path: "table", component: TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
