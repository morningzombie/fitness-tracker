import React from 'react';

export default function Strength({ }) {

    return (
        <div className="container">

<div className="header subsection-header">
                <h1>Strength</h1>
</div>

 <div className="days-container">
   <a href = "# " className="days">Sun</a>
   <a href = "# " className="days">Mon</a>
  <a href = "# " className="days">Tues</a>
  <a href = "# " className="days">Wed</a>
  <a href = "# " className="days">Thu</a>
  <a href = "# " className="days">Fri</a>
  <a href = "# " className="days">Sat</a>
</div>
        
        
        
<div className="container">
    <div className="main-section">
        <form className="main-section-1">
           
        <div className="user-inputs"><p>Date: </p><input className="form-box" type="text" /></div>
        <div className="user-inputs"><p>Bodyweight:</p><input className="form-box" type="text" /></div>
        <div className="user-inputs"><p>Exercise:</p><select className="form-box" type="text">
<option>Bench Press</option>
<option>Squat</option>
<option>Deadlift</option>
<option>Bent-over Row</option>
<option>Shoulder Press</option>
<option>Pulldown</option>
<option>Front Raise</option>
<option>Pull-Up</option>
<option>Back Extension</option>
<option>Fly</option>
<option>Row</option>
<option>Upright Row</option>
<option>Leg Curl</option>
<option>Pushdown</option>
<option>Triceps Extensions</option>
<option>Military Press</option>
</select>

        </div>
        
        
        <div className="user-inputs"><p>Weight:</p><input className="form-box" type="text" /></div>
        <div className="user-inputs"><p>Sets:</p><input className="form-box" type="text" /></div>
        <div className="user-inputs"><p>Reps:</p><input className="form-box" type="text" /></div>
        
        </form>
  
  <div  className="main-section-1">
  <div>StopWatch</div>
  </div>
       
    </div>

    {/* <div className="main-section">
        <div>Date</div>
        <div>Bodyweight</div>
        <div>Exercise</div>
        <div>Weight</div>
        <div>Sets</div>
        <div>Reps</div>
        <div>StopWatch</div>
    </div> */}
</div>






</div>
    )
}
