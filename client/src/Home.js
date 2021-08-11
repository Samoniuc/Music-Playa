import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return(
        
        <div className="container" style={{paddingTop:"21vh"}}>
            <div className="text-center">
                <p className="fs-2">
                    Welcome, fellow melomaniac!
                </p>
                <p className="fs-2">
                You can search for songs to listen right now, but in order to save your favourites or create playlists, you must first log in.
                </p>
            </div>
        </div>
        
    );
}

export default Home;