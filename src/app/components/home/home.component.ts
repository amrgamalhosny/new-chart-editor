import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openModal() {
    const dialogRef = this.dialog.open(UserManagementComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
 

  ngOnInit(): void {
  }

}

@Component({
  selector: 'app-user-management',
  templateUrl: '../user-management/user-management.component.html',
})
export class UserManagementComponent {
  constructor(
    public dialogRef: MatDialogRef<UserManagementComponent>) { }

  close() {
    this.dialogRef.close();
  }
}
