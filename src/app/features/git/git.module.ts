import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GitRoutingModule } from './git-routing.module';
import { GitComponent } from './git.component';
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import { FormComponent } from './components/form/form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    GitComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    GitRoutingModule,
    MatTableModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatIconModule
  ]
})
export class GitModule { }
