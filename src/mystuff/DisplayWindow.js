import React from 'react';
import './DisplayWindow.css';
import Data from './Data';

class DisplayWindow extends React.Component{

    render(){
        return(
            <div className="displayDiv">
                <header>
                    <h1 className="Name">{Data[this.props.arrayNum].name.first} {Data[this.props.arrayNum].name.last}</h1>
                </header>
                <main>
                    <p><span>From:</span> {Data[this.props.arrayNum].city}, {Data[this.props.arrayNum].country}</p> 
                    <p><span>Job Title:</span> {Data[this.props.arrayNum].title}</p>
                    <p><span>Employer:</span> {Data[this.props.arrayNum].employer}</p>
                </main>
                <footer>
                    <h2>Favorite Movies:</h2>
                    <ol>
                        <li>{Data[this.props.arrayNum].favoriteMovies[0]}</li>
                        <li>{Data[this.props.arrayNum].favoriteMovies[1]}</li>
                        <li>{Data[this.props.arrayNum].favoriteMovies[2]}</li>
                    </ol>
                </footer>
                <h1 className="Counter">{this.props.indexNum}/25</h1>
            </div>
            
            
        )
    }
}
export default DisplayWindow;