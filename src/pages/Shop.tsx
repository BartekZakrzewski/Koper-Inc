import '../Shop.css'

const Shop = () => {
  return (
    <div className="Shop">
      <nav className="shop-nav">
        <ul className="shop-menu-bar">
          <ShopNav link={'/'}>
            <img src={"/assets/KoperIncLogoPngWhite.png"} alt="Logo"/>
          </ShopNav>
          <ShopNav>
              <span className="title">
                Sklep
              </span>
          </ShopNav>
        </ul>
      </nav>
    </div>
  )
}

export default Shop

const ShopNav = ( props: any ) => {
  return(
    <li className="shop-nav-el">
      <a href={ props.link }>
        { props.children }
      </a>
    </li>
  )
}