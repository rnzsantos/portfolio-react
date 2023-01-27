import resume from "../../assets/resume.pdf"
import profileImage from "../../assets/profile-image.jpg"
import Project from "../../components/Project"
import projectsDb from "./projectsDb"

export default function About() {
  const projectElement = projectsDb.map(project => (
    <Project key={project.id} {...project} />
  ))

  return (
    <>
      <section className="text-light">
        <div className="container p-5 text-center">
          <h6>Nice to meet you!</h6>
          <h1>
            I'm, <span className="name">Renzo Santos.</span>
          </h1>
        </div>
      </section>

      <section className="text-light">
        <div
          className="
          container 
          d-md-flex
          flex-row-reverse
          justify-content-evenly
          align-items-center
          p-5
          pt-0
          pt-md-5
          text-center">
          <img className="img-fluid rounded" src={profileImage} alt="" />

          <div className="p-4">
            <p className="course lead">
              Bachelor of Science in <br /> Information Systems
            </p>
            <p>ICI-College of Arts and Technology</p>

            <a className="btn btn-outline-success mt-4" href={resume} download>
              Download Resume
            </a>
          </div>
        </div>
      </section>

      <section className="text-light">
        <div
          className="container
        p-5 d-flex 
        flex-column
        flex-md-row
        justify-content-evenly
        gap-5">
          {/* PROGRAMMING */}
          <div className="bg p-4">
            <p className="h4 text-center mb-5 fw-bold">Programming</p>
            <div className="skills">
              <p>
                <i className="fa-solid fa-circle-check pe-2"></i>
                HTML5
              </p>
              <p>
                <i className="fa-solid fa-circle-check pe-2"></i>
                CSS
              </p>
              <p>
                <i className="fa-solid fa-circle-check pe-2"></i>
                JavaScript
              </p>
              <p>
                <i className="fa-solid fa-circle-check pe-2"></i>
                React
              </p>
              <p>
                <i className="fa-solid fa-circle-check pe-2"></i>
                Bootstrap 5
              </p>
            </div>
          </div>

          {/* TOOLS */}
          <div className="bg p-4">
            <p className="h4 text-center mb-5 fw-bold">Tools</p>
            <div className="skills">
              <p>
                <i className="fa-solid fa-circle-check pe-2"></i>
                Git
              </p>
              <p>
                <i className="fa-solid fa-circle-check pe-2"></i>
                GitHub
              </p>
              <p>
                <i className="fa-solid fa-circle-check pe-2"></i>
                Netlify
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-light">
        <div className="container p-5">
          <p className="h4 text-center mb-5 fw-bold">Projects</p>
          <div className="row justify-content-evenly gap-5">
            {projectElement}
          </div>
        </div>
      </section>
    </>
  )
}
