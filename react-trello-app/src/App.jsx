import "./App.css";
import ImageSingle from "./components/TrelloApp/ImageSingle";
import TrelloList from "./components/TrelloApp/TrelloList";

function App() {
  return (
    <>
      <header>
        <div className="header__container">
          <div className="header__logo"></div>
          <div className="header__right">
            <div className="header__avatar">
              <ImageSingle
                title="header-logo"
                alt="header-logo"
                src="https://lh3.googleusercontent.com/a/ACg8ocL_BIaGhXjRi-s_3_7QGaP9XhEdck2vTJSf02dqW2MFMDmmlBuZ=s288-c-no"
              />
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="container">
          <div className="listContainer">
            <TrelloList />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
