import { CoursesService } from './../../services/courses.service';
import { Component } from '@angular/core';
import { Course } from '../model/course';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent {
  constructor(private CoursesService: CoursesService, public dialog: MatDialog){
    this.courses$ = this.CoursesService.list().pipe(
      catchError(error => {
        this.onError('Ocorreu um erro, por favor, tente novamente mais tarde!')
        return of([])
      })
    )
  }

  onError(ErroMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: ErroMessage,
    });
  }

  courses$: Observable<Course[]>;
  displayedColumns: string[] = ['_id', 'name', 'category'];

  ngOnInit(): void {}
}
