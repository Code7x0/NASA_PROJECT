

export default function Sidebar(props) {
  const {handleToggle, data} = props
  return (
    <div className="sidebar"> 
    <div className="overLay" onClick={handleToggle}></div>
    <div className="sidebarContent">
       <h2>{data?.title}</h2>
       <div className="descriptionContainer">
        <p className="descriptionTitle">{data?.date}</p>
        <p>{data?.explanation}</p>  
       </div>
       <button onClick={handleToggle}>
       <i className="fa-solid fa-arrow-right"></i>
       </button>
    </div>
  </div>
  )
}
