import GridItem from "./components/GridItem"

const App = (props) => {
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
              <GridItem title="Мужская сумка через плечо ультралегкая P.travel Синяя" src="https://content1.rozetka.com.ua/goods/images/big/303869273.jpg"/>
              <GridItem title="Холодильник HITACHI R-V610PUC7BSL" src="https://content.rozetka.com.ua/goods/images/big/12149544.jpg"/>
              <GridItem title="Мобильный телефон Apple iPhone 14 128GB Starlight" src="https://content2.rozetka.com.ua/goods/images/big/284913536.jpg"/>
              <GridItem title="Портативный ручной вентилятор Handy Mini Fan USB со складной ручкой Черный" src="https://content.rozetka.com.ua/goods/images/big/274566572.jpg"/>
              <GridItem title="Угольный гриль Weber Smokey Joe Premium" src="https://content.rozetka.com.ua/goods/images/big/10606706.jpg"/>
              <GridItem title="Кофемашина SIEMENS TE651319RW" src="https://content2.rozetka.com.ua/goods/images/big/318781426.jpg"/>
              <GridItem title="Вот тут будет будущий заголовок" src="https://image.winudf.com/v2/image/bXBsLmNvbS5jb21pbmdzb29uX3NjcmVlbl8wXzE1MzQ3NTgxODFfMDQ0/screen-0.webp?fakeurl=1&type=.webp"/>
            </div>
          </div>
        </div>
      </div>

    </>


  )
}

export default App