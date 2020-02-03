import React from 'react';




export default function Home({ goCardio, goStrength, goStretch, goMore }) {

    return (
        // <div className="container">
        <div className="flex-4-box">
            <button onClick={goCardio} className="box box1">Cardio</button>
            <button onClick={goStrength} className="box box2">Strength</button>
            <button onClick={goStretch} className="box box3">Stretch</button>
            <button onClick={goMore} className="box box4">More</button>
        </div>
        // </div >

        // <div class="row">
        //     <div class="column">
        //         <h2>Column 1</h2>
        //     </div>

        //     <div class="column">
        //         <h2>Column 2</h2>
        //         <p>Some text..</p>
        //     </div>

        //     <div class="column">
        //         <h2>Column 3</h2>
        //     </div>

        //     <div class="column">
        //         <h2>Column 4</h2>
        //     </div>
        // </div>



    )
}
