const GridItem = (props) => {
    return (
        <div className="grid-item">
        <p className="grid-title">{props.title}</p>
        <img className="gridImage" src={props.src} title="Title of image" alt="alt text here"/>
      </div>
    )
  }

export default GridItem