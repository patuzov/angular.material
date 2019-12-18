import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelsComponent } from './hotels/hotels.component';
import { AnymationsComponent } from './anymations/anymations.component';


const routes: Routes = [
  {path: '', component: HotelsComponent},
  {path: 'animation', component: AnymationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
