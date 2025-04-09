import { v4 } from "uuid";
import {
  CourseWrapper,
  LessonComponent,
  LessonsWrapper,
  Title,
} from "./styles";
import { lessonsReact } from "./data";

function Course() {

  const lessonsList = lessonsReact.map((lesson: string) => {
    return <LessonComponent key={v4()}>{lesson}</LessonComponent>;
  });

  return (
    <CourseWrapper>
     <Title>React Lessons:</Title>
      <LessonsWrapper>
        {lessonsList}
      </LessonsWrapper>
    </CourseWrapper>
  );
}

export default Course;
