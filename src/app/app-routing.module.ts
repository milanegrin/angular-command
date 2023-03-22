import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormComponent} from "./features/git/components/form/form.component";
import {GitComponent} from "./features/git/git.component";

const routes: Routes = [
  { path: '', redirectTo: 'component-one', pathMatch:    'full' },
  {
    path: '',
    children: [
      {
        path: '',
        component: GitComponent
      }
    ]
  },
  { path: 'gitcommand', loadChildren: () => import('./features/git/git.module').then(m => m.GitModule) },
  { path: 'gitcreate', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
