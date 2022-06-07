import styles from '../styles/Home.module.css'
import Footer from './Components/Footer'
import Landing from './Components/Landing'
import Topnav from './Components/Topnav'

export default function Home() {
  return (
    <div className="font-Roboto">
      <Topnav/>
      <Landing />
      <Footer/>
    </div>
  )
}
