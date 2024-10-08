import { Routes, Route } from "react-router-dom";
import Perfil from "../pages/Perfil";
import ForYou from "../pages/ForYou";
import Login from "../pages/Login";

function RoutesMain(){

    return(
        <Routes>
            <Route path="/" element = {<Perfil />}/>
            <Route path="/ForYou" element = {<ForYou />}/>
            <Route path="/Login" element = {<Login />}/>
        </Routes>
    )
}

export default RoutesMain;