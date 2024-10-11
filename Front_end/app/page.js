import Image from "next/image";
import styles from "./page.module.css";
import { Front } from './Components/Front'
import { Navbar } from './Components/Navbar'
import { Introduction } from './Components/Introduction'
import { Demo } from './Components/Demo'
import { Desti1 } from './Components/Desti1'
import { Login } from "./Components/Login";
import { Registration } from "./Components/Registration";


export default function Home() {
  return (
  <>
  <Login/>
  {/* <Registration/> */}
    {/* <Navbar/> */}
    {/* <Front/> */}
    {/* <Introduction/> */}
    {/* <Demo/>  */}
    {/* <Desti1/> */}
  </>
  );
}
