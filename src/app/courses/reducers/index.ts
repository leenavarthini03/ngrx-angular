import { allCoursesLoaded } from "./../course.actions";
import { reducers } from "./../../reducers/index";
import { Course, compareCourses } from "./../model/course";
import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { CourseActions } from "../action-types";
export interface CoursesState extends EntityState<Course> {
  allCoursesLoaded: boolean;
}

export const adapter = createEntityAdapter<Course>({
  sortComparer: compareCourses,
  // selectId:course => course.courseId
});

export const initialCourseState = adapter.getInitialState({
  allCoursesLoaded: false,
});

export const coursesReducer = createReducer(
  initialCourseState,
  on(CourseActions.allCoursesLoaded, (state, action) => {
    return  adapter.addAll(action.courses, { ...state, allCoursesLoaded: true });
  })
,
on(CourseActions.courseUpdated, (state, action) => {
  debugger;
  return adapter.updateOne(action.update, state);
}));

export const { selectAll } = adapter.getSelectors();

