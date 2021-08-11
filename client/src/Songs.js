import React from "react";
import ListSongs from "./ListSongs";

const Songs = () => {

    return (
        <>
            <div className="container" style={{paddingTop:"21vh"}}>
                <div className="text-center">
                    <p className="fs-2">
                        This is the songs page!
                    </p>
                </div>
            </div>
            <ListSongs></ListSongs>
        </>
    );
}

export default Songs;