import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatsComponent } from './pages/cats/cats.component';
import { FormComponent } from './pages/form/form.component';

const routes: Routes = [
  {path:"form", component:FormComponent},
  {path:"cats", component:CatsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
