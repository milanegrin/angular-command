import {Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class OpenSnackBarService {
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string, classOne:string = 'green-snackbar', classTwo: string = 'login-snackbar') {
    this._snackBar.open(message, action, {
      duration: 3000,
      panelClass: [classOne, classTwo],
    });
  }

}
