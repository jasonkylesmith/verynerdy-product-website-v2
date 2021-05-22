import React from 'react';
import Home from './Home';
import TOS from './TOS';
import FAQ from './FAQ';
import Donations from './Donations';
import { Switch, Route, Redirect } from 'react-router-dom';
import { FAQ_DATA } from '../shared/faq-data';

class Main extends React.Component {
    constructor(props){
        super(props);
    }

    render(){

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
                    <Route path='/home' component={HomePage} />
                    <Route path='/TOS' component={TOSPage} />
                    <Route path='/FAQ' component={FAQPage} />
                    <Route path='/Donations' component={DonationsPage} />
                    <Redirect to='/home' />
                </Switch>
            </React.Fragment>
        )
    }

}

export default Main;