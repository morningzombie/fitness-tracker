import React from 'react';




export default function Home({ goCardio, goStrength, goStretch, goMore }) {

    return (

    <div className="flex-4-box">
    <a href = "#view=cardio" className="box box1">Cardio</a>
    <a href = "#view=strength" className="box box2">Strength</a>
  <a href = "#view=stretch" className="box box3">Stretch</a>
  <a href = "#view=more" className="box box4">More</a>
</div>


    )
  
}
