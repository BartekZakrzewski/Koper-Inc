const Navbar = (props: any) => {
  return (
    <li className="nav-el">
        <a href={ props.link }>
            { props.children }
        </a>
    </li>
  )
}

export default Navbar