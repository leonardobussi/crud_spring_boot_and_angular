import { Injectable } from '@angular/core';
import { Course } from '../courses/model/course';
import { HttpClient } from '@angular/common/http'
import { delay, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  private readonly API = '/assets/course.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Course[]>(this.API)
    // .pipe(delay(3000))
    // (tap(courses => console.log(courses)));
  }
}
