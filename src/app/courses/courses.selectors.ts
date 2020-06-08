
import { createSelector, createFeatureSelector } from "@ngrx/store";
import * as fromCourses from "./reducers";
export const selectCoursesState = createFeatureSelector<
  fromCourses.CoursesState
>("courses");

export const selectAllCourses = createSelector(
  selectCoursesState,
  fromCourses.selectAll
);
export const selectBeginnerCourses = createSelector(
  selectAllCourses,
  (courses) => courses.filter((course) => course.category === "BEGINNER")
);
export const selectAdvancedCourses = createSelector(
  selectAllCourses,
  (courses) => courses.filter((course) => course.category === "ADVANCED")
);
export const selectpromoTotal = createSelector(
  selectAllCourses,
  (courses) => courses.filter((course) => course.promo).length
);
export const allCoursesLoaded = createSelector(
    selectCoursesState,
  (state) => state.allCoursesLoaded
);
