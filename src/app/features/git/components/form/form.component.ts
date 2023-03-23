import {Component, Inject, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Value} from "@angular/fire/compat/remote-config";
import {GitCommandFirestoreService} from "../../../../core/services/git-command-firestore.service";
import {GitCommand} from "../../../../intefaces/GitCommand";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {OpenSnackBarService} from "../../../../core/services/open-snack-bar-service";
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  form!: FormGroup;
  @Input() git: GitCommand ={
    command: '',
    description: '',
    example: '',
    url: ''
  };
  constructor(private readonly forBuilder: FormBuilder,
              private readonly fireStroreService:GitCommandFirestoreService,
              public dialogRef: MatDialogRef<FormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: GitCommand,
              private _snackBar: MatSnackBar,
              private readonly openSnackBarService: OpenSnackBarService) {
    this.git = data;
  }


  ngOnInit(): void {
    this.setForm();
  }

  private setForm() {
    this.form = this.forBuilder.group(
      {
        command: [this.git.command, [Validators.required]],
        description: [this.git.description, [Validators.required]],
        example: [this.git.example, [Validators.required]],
        url: [this.git.url]
      }
    )
  }

  submit() {
    console.log(this.git);
    if(this.git.id != null && this.git.id != '' ){
      this.fireStroreService.update(this.git).then(() => {
        this.openSnackBarService.openSnackBar("Update", "Success");
        this.dialogRef.close();
      });
    }else{
      this.git.url = this.git.url ? this.git.url : '';
      console.log(this.git);
      this.fireStroreService.create(this.git).then(() => {
        this.openSnackBarService.openSnackBar("Update", "Success");
        this.dialogRef.close();
      });
    }
  }
}
