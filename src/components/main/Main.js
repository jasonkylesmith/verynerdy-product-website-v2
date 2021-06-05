import React from 'react';
import Home from '../pages/Home';
import TOS from '../pages/TOS';
import FAQ from '../pages/FAQ';
import Donations from '../pages/Donations';
import { Switch, Route, Redirect } from 'react-router-dom';
import { FAQ_DATA } from '../../shared/faq-data';
import {TransitionGroup, CSSTransition} from 'react-transition-group'

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cart: [
                {
                    
                }
            ]

        };
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