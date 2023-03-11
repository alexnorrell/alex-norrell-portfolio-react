import resume from '../files/Alex-Norrell-Resume_2022.pdf'

export default function Resume () {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '10%',
                height: '100vh',
                fontSize: '100px'
            }}>
            <a href={resume} target="_blank">Download resume</a>
        </div>
    )
}