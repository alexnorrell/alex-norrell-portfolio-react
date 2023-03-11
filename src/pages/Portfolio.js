import "materialize-css/dist/css/materialize.min.css";

export default function Portfolio () {
    return(
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                height: '60vh',
                margin: '5%'
            }}>
            <div 
                className="card-panel"
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    width: '100vw',
                }}>
                <div 
                    className="row"
                    style={{
                        display: 'flex',
                        justifyContent: 'space-around'                 
                    }}>
                        
                    <div className="col s2">
                        <div className="card">
                            <div className="card-image">
                            <img 
                                src="https://via.placeholder.com/200" alt='sample-img'/>
                            <span className="card-title">Card Title</span>
                            </div>
                            <div className="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                            </div>
                            <div className="card-action">
                            <a href="#">This is a link</a>
                            </div>
                        </div>
                    </div>

                    <div className="col s2">
                        <div className="card">
                            <div className="card-image">
                            <img 
                                src="https://via.placeholder.com/200" alt='sample-img'/>
                            <span className="card-title">Card Title</span>
                            </div>
                            <div className="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                            </div>
                            <div className="card-action">
                            <a href="#">This is a link</a>
                            </div>
                        </div>
                    </div>
                
                    <div className="col s2">
                        <div className="card">
                            <div className="card-image">
                            <img 
                                src="https://via.placeholder.com/200" alt='sample-img'/>
                            <span className="card-title">Card Title</span>
                            </div>
                            <div className="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                            </div>
                            <div className="card-action">
                            <a href="#">This is a link</a>
                            </div>
                        </div>
                    </div>

                    <div className="col s2">
                        <div className="card">
                            <div className="card-image">
                            <img 
                                src="https://via.placeholder.com/200" alt='sample-img'/>
                            <span className="card-title">Card Title</span>
                            </div>
                            <div className="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                            </div>
                            <div className="card-action">
                            <a href="#">This is a link</a>
                            </div>
                        </div>
                    </div>

                    <div className="col s2">
                        <div className="card">
                            <div className="card-image">
                            <img 
                                src="https://via.placeholder.com/200" alt='sample-img'/>
                            <span className="card-title">Card Title</span>
                            </div>
                            <div className="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                            </div>
                            <div className="card-action">
                            <a href="#">This is a link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}