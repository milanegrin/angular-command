import {Component, OnInit, Optional} from '@angular/core';
import {GitCommandFirestoreService} from "../../core/services/git-command-firestore.service";
import {GitCommand} from "../../intefaces/GitCommand";
import {Observable} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {FormComponent} from "./components/form/form.component";
import {OpenSnackBarService} from "../../core/services/open-snack-bar-service";

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.scss']
})
export class GitComponent implements OnInit{

  firestore$: Observable<GitCommand[]> | undefined;
  displayedColumns: string[] = ['command', 'description', 'example', 'url',  'action'];
  dataSource!: GitCommand[];

  auxDataSource!: GitCommand[];

  constructor(private readonly firestoreService: GitCommandFirestoreService,
             @Optional() public dialog: MatDialog,
              private readonly openSnackBarService: OpenSnackBarService) {
  }

  ngOnInit(): void {
    this.firestore$ = this.firestoreService.getAll();
    this.firestore$.subscribe(data => {
      this.dataSource = data;
      this.auxDataSource = this.dataSource;
    });
  }

  applyFilter($event: KeyboardEvent) {
    const filterValue = ($event.target as HTMLInputElement).value;
    if(filterValue){
      console.log( filterValue )
      this.dataSource = this.dataSource.filter(s => s.description.toLowerCase().includes(filterValue.trim().toLowerCase()) || s.command.toLowerCase().includes(filterValue.trim().toLowerCase()));
    }else{
      this.dataSource = this.auxDataSource;
    }
    console.log(this.dataSource )
  }

  edit(gitCommand: GitCommand[]) {
    this.dialog.open(FormComponent, {
      data: gitCommand,
      width: '70%',
      height: '60%'
    });
  }

  create() {
    this.dialog.open(FormComponent, {
      data: {},
      width: '70%',
      height: '60%'
    });
  }

  delete(id: string) {
    this.firestoreService.delete(id).then(
      () =>{
        this.openSnackBarService.openSnackBar("Delete", "Command", 'red-snackbar','login-snackbar');
      }
    );
  }
}
