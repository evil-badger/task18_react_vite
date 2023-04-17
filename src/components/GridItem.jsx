import classes from './GridItem.module.scss'

const GridItem = (props) => {
    return (
        <div className={classes.gridItem}>
        <p className={classes.gridTitle}>{props.title}</p>
        <img className={classes.gridImage} src={props.src} title="Title of image" alt="alt text here"/>
      </div>
    )
  }

export default GridItem