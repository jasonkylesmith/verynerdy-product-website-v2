import React, {useEffect} from 'react';
import Home from '../pages/Home';
import TOS from '../pages/TOS';
import FAQ from '../pages/FAQ';
import Donations from '../pages/Donations';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { FAQ_DATA } from '../../shared/faq-data';

/* class Main extends React.Component {
    constructor(props){
        super(props);
        
    } */

    function Main() {

        const { pathname, hash } = useLocation();

        useEffect(() => {
            // if not a hash link, scroll to top
            if (hash === '') {
              window.scrollTo(0, 0);
            }
            // else scroll to id
            else {
              setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                  element.scrollIntoView();
                }
              }, 0);
            }
          }); // do this on route change


        const HomePage = () => {;
            return (
                <Home />
            );
        }

        const TOSPage = () => {
            return (
                <TOS />
            );
        }

        const FAQPage = () => {
            return (
                <FAQ data={FAQ_DATA}/>
            );
        }

        const DonationsPage = () => {
            return (
                <Donations />
            );
        }



        return (
            <React.Fragment>
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomePage} />
                    <Route exact path={`${process.env.PUBLIC_URL}/tos`} component={TOSPage} />
                    <Route exact path={`${process.env.PUBLIC_URL}/faq`} component={FAQPage} />
                    <Route exact path={`${process.env.PUBLIC_URL}/donations`} component={DonationsPage} />
                    <Redirect to={`${process.env.PUBLIC_URL}/`} />
                </Switch>
            </React.Fragment>
        )


}

export default Main;