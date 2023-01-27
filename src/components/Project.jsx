export default function Project(props) {
  console.log(props)
  return (
    <>
      <div className="col-auto">
        <div className="card bg p-1" style={{ width: "250px" }}>
          <a href={props.url} target="_blank">
            <img
              src={`../../public/${props.img}`}
              className="card-img-top rounded"
              alt=""
            />
          </a>
          <div className="card-body text-center">
            <h5 className="card-title fs-6">{props.title}</h5>
          </div>
        </div>
      </div>
    </>
  )
}
