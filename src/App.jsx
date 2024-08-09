import Home from "./Pages/Home.jsx";
import {NavLink, Route, Routes} from "react-router-dom";
import Contacts from "./Pages/Contacts.jsx";
import NosProjets from "./Pages/Nos projets.jsx";

function App() {
    return (
        <>
            <header
                className={"flex flex-wrap items-center justify-between p-5 border-b bg-gradient-to-r text-white from-sky-700 to-blue-500"}>
                <h1>Oxydia</h1>
                <nav>
                    <NavLink to=""
                             className={(nav) => nav.isActive ? "hover:underline px-3 border-x" : "hover:underline px-3"}>Accueil</NavLink>
                    <NavLink to="projets"
                             className={(nav) => nav.isActive ? "hover:underline px-3 border-x" : "hover:underline px-3"}>Nos
                        projets</NavLink>
                    <NavLink to={"contacts"}
                             className={(nav) => nav.isActive ? "hover:underline px-3 border-x" : "hover:underline px-3"}>Nous
                        contacter</NavLink>
                </nav>
            </header>
            <main className={"min-h-screen"}>
                <Routes>
                    <Route path="" element={<Home/>}/>
                    <Route path={"projets"} element={<NosProjets/>}/>
                    <Route path={"contacts"} element={<Contacts/>}/>
                </Routes>
            </main>
            <footer className={"h-5 bg-black "}>

            </footer>
        </>
    )
}

export default App
