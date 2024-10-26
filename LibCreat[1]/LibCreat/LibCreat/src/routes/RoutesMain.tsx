import { Routes, Route } from "react-router-dom";
import Perfil from "../pages/Perfil";
import ForYou from "../pages/ForYou";
import Login from "../pages/Login";
import Singin from "../pages/Singin";
import Notificacoes from "../pages/Notificacoes";

function RoutesMain(){

    return(

        <>

            <Routes>

                <Route path="/Perfil" element = {<Perfil />}/>
                <Route path="/ForYou" element = {<ForYou />}/>
                <Route path="/Login" element = {<Login />}/>
                <Route path="/Singin" element = {<Singin />}/>
                <Route path="/Notificacoes" element = {<Notificacoes />}/>

                <Route path="/" element ={<Singin />}/>
                
            </Routes>

        </>
    )
}

export default RoutesMain;