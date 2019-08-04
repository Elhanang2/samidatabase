import React, { Component } from 'react';

 import  './Home.css';
//  import "../../../../public/images/home.jpeg"
class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{fontSize:"18px"}}>
                <div className="homecontainer" >
                    
                        <h1 className="home-header">Sql database online training</h1>
                    
                </div>
                <div className="home-content">
                 <h1>SQL Database course</h1>
                 <p>SQL Database Training Institute is offering real-time, 
                 practical trainings exclusively on SQL Server Development <span><b>(T-SQL & SQL Dev)</b></span>,  Microsoft Business Intelligence and Data Warehouse <span><b>(MSBI)</b></span>.
                </p>
                 <p>We offer Instructor-Led LIVE Online Training, Classroom Training and
                  On-demand Video Training. We have courses tailored for every Professional - Experienced 
                  and Starters, from any background. We also offer Job Support and Placement services in USA. 
                  At SQL Database school we are strongly committed to provide Practical and Real-time Training Sessions. 
                  All our training courses include Real-time Projects, Weekly Mock Interviews, Placement Assistance and
                   free 24x7 LIVE Online Lab.</p>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sint excepturi consectetur ab quibusdam debitis! Pariatur, aperiam? Quisquam autem accusamus dolorem, nobis repellendus harum! Deserunt unde qui ipsum architecto! Quo dolores reiciendis deserunt quisquam accusamus excepturi vero! Nemo magni, velit animi quibusdam delectus veniam ex. Labore minus eligendi excepturi quos.</p>
                </div>
            </div>
         );
    }
}
 
export default Home;