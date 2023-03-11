import "materialize-css/dist/css/materialize.min.css";
import headshot from '../images/IMG_7377.JPG';

    export default function About () {
        return (
            <div 
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    margin: '5%',
                    height: '70vh'
                }}>
                    <img src={headshot} alt='placeholder' />
                    <div 
                        className="card-panel"
                        style={{
                            width: '40%',
                            height: '70%'
                        }}>
                            <h2>About Me</h2>
                            <p
                                style={{
                                    fontSize: '1.4vw'
                                }}>Hi, my name is Alex Norrell! I am 30 years old and am attending 
                                classes through Georgia Tech to become a full stack programmer.
                                 When I am not doing that, I am either working with dogs or playing 
                                 music with my band.
                            </p>
                    </div> 
            </div>
        )
    }