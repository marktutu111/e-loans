import React, { Component } from 'react';
import { MainRoute, AuthRoute } from "./src/app.routing";
import { LoginService } from "./src/services";
import { WalletComponent, HomeComponent, LoanViewComponent } from "./src/screens";
import { ModalComponent } from "./src/components";



export default class App extends Component {

        constructor (props)  {

                super(props);
                this.state = {
                    loggedIn: false
                }

        }


        componentDidMount () { LoginService.login$.subscribe(() => this.setState({ loggedIn: true }));}
        renderView ()  { return this.state.loggedIn ? <MainRoute /> : <AuthRoute />  }


        render () {

            return this.renderView();
            
        }

}
