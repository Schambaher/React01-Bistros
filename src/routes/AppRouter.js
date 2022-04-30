import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutScreen } from "../screens/AboutScreen";
import { ContactScreen } from "../screens/ContactScreen";
import { HomeSreen } from "../screens/HomeSreen";
import { MenuScreen } from "../screens/MenuScreen";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="home" element={ <HomeSreen /> }/>
                <Route exact path="about" element={ <AboutScreen /> }/>
                <Route exact path="menu" element={ <MenuScreen /> }/>
                <Route exact path="contact" element={ <ContactScreen /> }/>

                <Route exact path="/" element={ <HomeSreen /> } />
            </Routes>
        </BrowserRouter>
    )
}
