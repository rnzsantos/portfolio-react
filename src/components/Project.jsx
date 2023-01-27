import p1 from "../assets/images/project-1.png"
import p2 from "../assets/images/project-2.png"
import p3 from "../assets/images/project-3.png"
import p4 from "../assets/images/project-4.png"

export default function Project(props) {
  const img =
    props.id === 1 ? p1 : props.id === 2 ? p2 : props.id === 3 ? p3 : p4

  return (
    <>
      <div className="col-auto">
        <div className="card bg p-1" style={{ width: "250px" }}>
          <a href={props.url} target="_blank">
            <img src={img} className="card-img-top rounded" alt="" />
          </a>
          <div className="card-body text-center">
            <h5 className="card-title fs-6">{props.title}</h5>
          </div>
        </div>
      </div>
    </>
  )
}
