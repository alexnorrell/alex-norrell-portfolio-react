export default function Contact () {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                height: '80vh'
            }}>
            <div 
                className="card-panel"
                style={{
                    width: '50%',
                    margin: '5%'
            }}>
                <h1 className="center">Contact</h1>

                <ul
                    style={{
                       fontSize: '60px' 
                    }}>
                    <li>Email: user@gmail.com</li>
                    <li>Phone: 123-456-7890</li>
                    <div 
                        style={{
                            display: 'flex',
                            justifyContent: 'space-around'
                        }}>
                        <li><a href="https://github.com/alexnorrell">Github</a></li>
                        <li><a href="https://www.linkedin.com/in/alex-norrell-814a6b243/">LinkedIn</a></li>
                        <li><a href="https://open.spotify.com/artist/40vUY0Z0SDZ2RNEcLK5yGy">Spotify</a></li>
                    </div>
                </ul>
            </div>
        </div>
    )
}