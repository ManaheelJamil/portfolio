import Navbar from './navbar'
// import About from './(about)/mana/page'
import Introduce from './introduce'
import About from './about'
import Resume from './resume'
import Skills from './skills'
import Projects from './projects'
import Contact from './contact'
export default function page() {
  return (
    <div  >
      <Navbar />
     <Introduce/>
     <About/>
     <Resume/>
     <Skills/>
     <Projects/>
     <Contact/>
    </div>
  )
}
