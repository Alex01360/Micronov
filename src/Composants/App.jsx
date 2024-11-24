import { BrowserRouter, Routes, Route } from "react-router-dom";

import Professionnels from "../Pages/Professionnels";
import Particuliers from "../Pages/Particuliers";
import Education from "../Pages/Education";
import Collectivités from "../Pages/Collectivités";
import CoffreFort from "../Pages/CoffreFort";
import Presse from "../Pages/Presse";
import MentionLégales from "../Pages/MentionLégales"
import Cookies from "../Pages/Cookies";
import AssociationMicromegas from "../Pages/AssociationMicromegas";
import CollecteReconditionnement from "../Pages/CollecteReconditionnement";
import PortesOuvertes from "../Pages/PortesOuvertes";
import Contact from "../Pages/Contact";
import Header from "./Header";
import Home from "../Pages/Home";
import Footer from "./Footer";
import InfosPratiques from "../Pages/InfosPratiques";

const App = () => {

const basename=import.meta.env.MODE==="production" ? "/Micronov":"";

    return (
        <BrowserRouter basename={basename}> 
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Collectivités" element={<Collectivités />} />
                <Route path="/Education" element={<Education />} />
                <Route path="/Particuliers" element={<Particuliers />} />
                <Route path="/Professionnels" element={<Professionnels />} />
                <Route path="/AssociationMicromegas" element={<AssociationMicromegas />} />
                <Route path="/CollecteReconditionnement" element={<CollecteReconditionnement />} />
                <Route path="/PortesOuvertes" element={<PortesOuvertes />} />
                <Route path="/Presse" element={<Presse />} />
                <Route path="/MentionLégales" element={<MentionLégales />} />
                <Route path="/Cookies" element={<Cookies />} />
                <Route path="/CoffreFort" element={<CoffreFort />} />
                <Route path="/InfosPratiques" element={<InfosPratiques />} />
            <Route path="/Contact" element={<Contact/>}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};
export default App;
