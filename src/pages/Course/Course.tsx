import { CourseWrapper, LessonComponent, LessonsWrapper, Title } from "./styles";
import { v4 } from "uuid";

function Course () {

    const lessonsReact: string[] = [
        "1. React Project",
        "2. React: Object Types, export/import",
        "3. React: Component typing, map",
        "4. React: Children, control components",
        "5. React: Styling components",
        "6. React: GlobalStyles, style templates",
        "7. React: useEffect",
        "8. React: axios",
        "9. React: Formik, Yup",
        "10. React: Routing"
      ];

      const lessonsList = lessonsReact.map((lesson) => {
        return (
            <LessonComponent key={v4()}>{lesson}</LessonComponent>
        )
      });
      
    return (
        <CourseWrapper>
            <Title>React Lessons:</Title>
            <LessonsWrapper>
                {lessonsList}
            </LessonsWrapper>
        </CourseWrapper>
    )
}

export default Course;