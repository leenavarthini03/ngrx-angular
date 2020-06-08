import { allCoursesLoaded } from "./course.actions";

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { map, mergeMap, catchError, tap, concatMap } from "rxjs/operators";
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from "@angular/router";
import { CourseActions } from "./action-types";
import { CoursesHttpService } from "./services/courses-http.service";

@Injectable()
export class CoursesEffects {
  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.loadAllCourses),
      concatMap((action) => {
        debugger;
        return this.coursesHttpService.findAllCourses();
      }),
      map((courses) => allCoursesLoaded({ courses }))
    )
  );
  updateCourses$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CourseActions.courseUpdated),
        concatMap((action) => {
          debugger;
          return this.coursesHttpService.saveCourse(
            action.update.id,
            action.update.changes
          );
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private coursesHttpService: CoursesHttpService
  ) {}
}
