import GridItem from "./components/GridItem"
import SideNavItem from "./components/SideNavItem"
import TopNavItem from "./components/TopNavItem"

const App = () => {
  return (
    <>

      <div className="wrap">
        <div className="topnav">
          <TopNavItem className="active" href="#home" title="Домой"/>
          <TopNavItem href="#news" title="Новинки"/>
          <TopNavItem href="#contact" title="Контакты"/>
          <TopNavItem href="#customConditions" title="Для Юр Лиц"/>
        </div>
        <div className="sideAndMain">
          <div className="sidenav">
            <SideNavItem href="#About" title="About"/>
            <SideNavItem href="#Services" title="Services"/>
            <SideNavItem href="#Clients" title="Clients"/>
            <SideNavItem href="#Contact" title="Contact"/>
            <SideNavItem href="#Donations" title="Нужно больше золота"/>
            <SideNavItem href="#Donations" title="Поддержите нас в Patreon"/>
            <SideNavItem href="#Donations" title="Эфир перевели на POS"/>
            <SideNavItem href="#Donations" title="Фарма больше нет"/>
          </div>

 
          <div className="main">
            {/*это пример когда взяли компонент, предназначенный для меню, но он сможет работать и здесь*/}
            <TopNavItem className="soldOut" href="#home" title="РАСПРОДАЖА АПРЕЛЬ - ПОКУПАЙ ЛУТ, ФАРМИ БОНУСЫ"/> 
            <p className="soldOut">РАСПРОДАЖА АПРЕЛЬ - ПОКУПАЙ ЛУТ, ФАРМИ БОНУСЫ</p>
            <div className="grid-container">
              <GridItem title="Мужская сумка через плечо ультралегкая P.travel Синяя" src="https://content1.rozetka.com.ua/goods/images/big/303869273.jpg" />
              <GridItem title="Холодильник HITACHI R-V610PUC7BSL" src="https://content.rozetka.com.ua/goods/images/big/12149544.jpg" />
              <GridItem title="Мобильный телефон Apple iPhone 14 128GB Starlight" src="https://content2.rozetka.com.ua/goods/images/big/284913536.jpg" />
              <GridItem title="Портативный ручной вентилятор Handy Mini Fan USB со складной ручкой Черный" src="https://content.rozetka.com.ua/goods/images/big/274566572.jpg" />
              <GridItem title="Угольный гриль Weber Smokey Joe Premium" src="https://content.rozetka.com.ua/goods/images/big/10606706.jpg" />
              <GridItem title="Кофемашина SIEMENS TE651319RW" src="https://content2.rozetka.com.ua/goods/images/big/318781426.jpg" />
              <GridItem title="Вот тут будет будущий заголовок" src="https://image.winudf.com/v2/image/bXBsLmNvbS5jb21pbmdzb29uX3NjcmVlbl8wXzE1MzQ3NTgxODFfMDQ0/screen-0.webp?fakeurl=1&type=.webp" />
            </div>
          </div>
        </div>
      </div>

    </>


  )
}

export default App