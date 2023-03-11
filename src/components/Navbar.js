import "materialize-css/dist/css/materialize.min.css";

export default function Navbar() {
    return (
        <nav className= ' card-deep-purple darken-3'>
                <div class="nav-wrapper">
                    <a href="/" class="brand-logo">Alex Norrell</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="/about">About Me</a></li>
                        <li><a href="/portfolio">Portfolio</a></li>
                        <li><a href="/resume">Resume</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
        </nav>
    )
}