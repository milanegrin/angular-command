import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormComponent} from "./features/git/components/form/form.component";

const routes: Routes = [
  { path: 'gitcommand', loadChildren: () => import('./features/git/git.module').then(m => m.GitModule) },
  { path: 'gitcreate', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
