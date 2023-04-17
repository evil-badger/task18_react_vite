const TopNavItem=(props)=>{
    console.log(props)
    return (
        <a className={props.className} href={props.href}>{props.title}</a>
    )
}

export default TopNavItem