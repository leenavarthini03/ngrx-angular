
import { createAction, props } from '@ngrx/store';
import { Course } from './model/course';
import { Update } from '@ngrx/entity';

export const loadAllCourses  = createAction(
    "[Courses resolver] Load All Courses",
);
export const allCoursesLoaded  = createAction(
    "[Load Courses Effect] All courses Loaded",
    props<{courses:Course[]}>()
);
export const courseUpdated  = createAction(
    "[Edit course dialog] Course Updated",
    props<{update:Update<Course>}>()
);