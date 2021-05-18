import React from 'react';

class Footer extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <footer className="sticky fixed-bottom">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="pb-0 px-2 pt-2 col-12 text-center">
                            <a href="https://twitter.com/jasonkylesmith/status/1381331071153868803?s=20" target="_blank"><i className="fa fa-facebook-square mx-1"></i></a>
                            <a href="https://twitter.com/jasonkylesmith/status/1381331071153868803?s=20" target="_blank"><i className="fa fa-twitter-square mx-1"></i></a>
                            <a href="https://twitter.com/jasonkylesmith/status/1381331071153868803?s=20" target="_blank"><i className="fa fa-youtube-square mx-1"></i></a>
                            <a href="https://www.instagram.com/p/CN-Bto8hLmj/" target="_blank"><i className="fa fa-instagram mx-1"></i></a>
                        </div>
                        <nav className="navbar navbar-expand col-12 col-lg-5 py-0 text-center justify-content-center">
                            <ul className="navbar-nav">
                                <li className="nav-item"><a href="faq.html" className="nav-link">FAQ</a></li>
                                <li className="nav-item"><a href="tos.html" className="nav-link">Terms of Service</a></li>
                                <li className="nav-item"><a href="sizing.html" className="nav-link">Sizing Charts</a></li>
                                <li className="nav-item"><a href="donation.html" className="nav-link">Donations</a></li>
                            </ul>
                        </nav>
                        <div className="col-12 text-center bg-dark text-light">
                            <span className="small">&copy; The Very Nerdy Clothing Company 2021</span>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;