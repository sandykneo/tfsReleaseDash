import React, { Component } from 'react'


//import './App.css';
import { Button } from '@material-ui/core';

import Divider from '@material-ui/core/Divider';


export class Navbar extends Component {
constructor(props) {
    super(props)

   console.log(this.props)
}


    render() {


        return (
            <div>
                 
                        <Button onClick={() => this.props.navClick('DEV')} className={this.props.class.button}>DEV</Button>
                        <Button color="primary" onClick={() => this.props.navClick('SIT')}  className={this.props.class.button}>
                            SIT
      </Button>
                        <Button color="primary" onClick={() => this.props.navClick('UAT')} className={this.props.class.button} >
                            UAT
      </Button>
                        <Button color="secondary" onClick={() => this.props.navClick('PROD')} className={this.props.class.button} >
                            PROD
      </Button>
                        <Button color="secondary" onClick={() => this.props.navClick('BCP')} className={this.props.class.button}>
                            BCP
      </Button>
      <Divider/>
            </div>
        )
    }
}

export default Navbar
