import React from 'react';


function Home(){
const currentTime = new Date().toString()



    return (
    <div className="appBody">
        <p className= "greet"><h2>Welcome!</h2></p>
        
        <div id = "tasks">
       
        
        <div className= "boxT">
        <p className = "big1">
           <span>Completion Rate 
            </span><br/>
           <span>97% <em><b>+2%</b></em> <img id = "higher" src="https://images.pexels.com/photos/6289065/pexels-photo-6289065.jpeg?auto=compress&cs=tinysrgb&w=600" alt= "high"/>
            </span>
         </p>
        </div>
        <div className= "box">
            <p className = "box1">
            <p id= "timer">{currentTime}</p>
            

           {/* <span>9:40 AM 
            </span><br/> */}
           {/* <span>October 7
            </span> */}
         </p>
        </div>

        <div className= "box">
            <p className = "box2">
           <span><b>Messages</b>
            </span><br/>
           <span>30 unread messages
            </span>
         </p>
        </div>

        <div className= "box">
            <p className = "box3">
           <span><b>Pending Tasks</b> 
            </span><br/>
           <span>70 pending
            </span>
         </p>
        </div>

        <div className= "box">
            <p className = "box4">
           <span><b>Monthly Sales Target</b>
            </span><br/>
           <span> $45000
            </span>
         </p>
        </div>

        <div className= "weeklyplans">
           
           <div className= "large">
            <p className = "large1">
           <span><b>Package Delivery</b>
            </span><br/>
           <span> Location: Nakuru
            </span><br />
            {/* <span>10th September 2022</span><br/> */}
           
         </p>
         </div>
         <div className= "large">
            <p className = "large2">
           <span><b>Meeting with client</b>
            </span><br/>
            <span>14th September- 22th September 2022
                </span> <br/>
                
            <span>Ask for feedback.</span><br/>

            

            
            
         </p>
         </div>
         <div className= "large">
            <p className = "large3">
           
         </p>
         <img className = "image" src="https://images.pexels.com/photos/8850856/pexels-photo-8850856.jpeg?auto=compress&cs=tinysrgb&w=600" alt = "election"/>
         </div>
        </div>


        </div>
        
        
    

    </div>
)
}

export default Home;