import React from "react";
import Header from "../../Screens/First/Header/Header";
import Menu from "../../Screens/First/Menu/Menu";
import Search from "../../Screens/First/Search/Search";
import Text from "../../Screens/First/Text/Text";
import Square from "../../Screens/First/Square/Square";
import Square2 from "../../Screens/First/Square2/Square2";
import AppDesign from "../../Screens/Second/AppDesign/AppDesign";

function Main(){
    return(
        <div>
            <Header/>
            <Menu/>
            <Search/>
            <Text/>
            <Square/>
            <Square2/>
            <AppDesign/>
        </div>
    )
}
export default Main;