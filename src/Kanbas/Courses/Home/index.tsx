import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home({ isFaculty }: { isFaculty: boolean }) {
  return (
    <div className="d-flex" id="wd-home">
      <div className="flex-fill">
        <Modules isFaculty={isFaculty} />
      </div>
      <div className="d-none d-xl-block ms-5">
        <CourseStatus isFaculty={isFaculty} />
      </div>
    </div>
  )
  ;
}
