const App = () => {
  return (
    <>
      <div className="wrap">
        <div className="topnav">
          <a className="active" href="#home">ДОМОЙ</a>
          <a href="#news">НОВОЕ</a>
          <a href="#contact">КУДА ЗВОНИТЬ</a>
          <a href="#about">ДЛЯ ЮРЛИЦ</a>
        </div>
        <div className="sideAndMain">
          <div className="sidenav">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
            <a href="#">Нужно больше золота</a>
            <a href="#">Нужно больше золота</a>
            <a href="#">Нужно больше золота</a>
            <a href="#">Нужно больше золота</a>
          </div>

          <div className="main">
            <p className="soldOut">РАСПРОДАЖА АПРЕЛЬ - ПОКУПАЙ ЛУТ, ФАРМИ БОНУСЫ</p>
            <div className="grid-container">
              <div className="grid-item">
                <p className="grid-title"> Мужская сумка через плечо ультралегкая P.travel Синяя</p>
                <img className="gridImage" src="https://content1.rozetka.com.ua/goods/images/big/303869273.jpg" title="Title of image" alt="alt text here" />

              </div>
              <div className="grid-item">
                <p className="grid-title">Холодильник HITACHI R-V610PUC7BSL</p>
                <img className="gridImage" src="https://content.rozetka.com.ua/goods/images/big/12149544.jpg" title="Title of image" alt="alt text here" />
              </div>
              <div className="grid-item">
                <p className="grid-title">Мобильный телефон Apple iPhone 14 128GB Starlight</p>
                <img className="gridImage" src="https://content2.rozetka.com.ua/goods/images/big/284913536.jpg" title="Title of image" alt="alt text here" />
              </div>
              <div className="grid-item">
                <p className="grid-title"> Мужская сумка через плечо ультралегкая P.travel Синяя</p>
                <img className="gridImage" src="https://content1.rozetka.com.ua/goods/images/big/303869273.jpg" title="Title of image" alt="alt text here" />

              </div>
              <div className="grid-item">
                <p className="grid-title">Холодильник HITACHI R-V610PUC7BSL</p>
                <img className="gridImage" src="https://content.rozetka.com.ua/goods/images/big/12149544.jpg" title="Title of image" alt="alt text here" />
              </div>
              <div className="grid-item">
                <p className="grid-title">Мобильный телефон Apple iPhone 14 128GB Starlight</p>
                <img className="gridImage" src="https://content2.rozetka.com.ua/goods/images/big/284913536.jpg" title="Title of image" alt="alt text here" />
              </div>

            </div>
          </div>
        </div>
      </div>

    </>


  )
}

export default App