import React from "react";

import "./homepage.styles.scss";
import Direcotry from "../../components/directory/directory.component";

const HomePage = ({history}) => {

    return (
        <div className="homepage">
            <Direcotry/>
        </div>
    )
}

export default HomePage;