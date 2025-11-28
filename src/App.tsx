import logo from "/logo.svg"
import main_img from "/image.png"
import './App.css'

function App() {

  return (
    <>
    <div className='wrapper'>
      <header>
        <div className='header-container'>
          <section className='header-container-logo'>
            <img src={logo} width="50" height="50" alt="logo" />
            <h2>Maksim</h2>
          </section>
          <section>
            <p>Войти</p>
          </section>
        </div>
      </header>

      <main>
        <div className='main-container'>

          <section className='main-container-left'>
            <h1>Современные решения для вашего бизнеса</h1>
            <p>Автоматизируйте процессы и масштабируйте компанию с помощью наших инновационных инструментов</p>
            <button>Начать</button>
          </section>

          <section className='main-container-right'>
            <img src={main_img} alt="" />
          </section>
        </div>
      </main>
    </div>
    </>
  )
}

export default App
