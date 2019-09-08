import React, { Component } from 'react'

//import './App.css';

import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import UAT from './UAT'
import DEV from './DEV'
import SIT from './SIT'
import Navbar from './Navbar'
import axios from 'axios';

const API_URL = 'http://jsonplaceholder.typicode.com';
//const API_URL = 'https://api.github.com/users/hadley/orgs';

 const useStyles = theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
      ul: {
        margin: 0,
        padding: 0,
      },
      li: {
        listStyle: 'none',
      },
    },
     button: {
    margin: theme.spacing(1),
  },
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },
    heroContent: {
      padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
      backgroundColor: theme.palette.grey[200],
    },
    cardPricing: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      marginBottom: theme.spacing(2),
    },
    footer: {
      borderTop: `1px solid ${theme.palette.divider}`,
      marginTop: theme.spacing(8),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
      },
       paper: {
    marginTop: theme.spacing(3),
    width: '100%',
    overflowX: 'auto',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 650,
    color:'red'
  },
  head:{backgroundColor: 'lightgray'}
    },
  });

  

export class App extends Component {


    constructor(props) {
        super(props)

        this.state = {
            selectedEnv: '',
            isUAT: false,
            isDEV: false,
            isSIT: false
        }
        console.log(this.props)
       
        this.handleClick = this.handleClick.bind(this);
    }

testApiCall() {
    const url = `${API_URL}/users/`;
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ users: data })
      console.log(this.state.users)
     })
  }


    createData(name, calories, fat, carbs, protein, rank,env) {
        return { name, calories, fat, carbs, protein, rank,env };
    }

    handleClick(env) {
        console.log(this.rows);
        console.log(env);

        this.setState({
            selectedEnv: env,
            isUAT: env === 'UAT' ? true : false,
            isSIT: env === 'SIT' ? true : false,
            isDEV: env === 'DEV' ? true : false
        });

    }

    render() {
        this.classes= this.props.classes;
        this.rows = [
            this.createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 1,'UAT'),
            this.createData('Frozen Test', 45, 6.0, 24, 4.0, 6,'UAT'),
            this.createData('Frozen Yummy', 23, 6.0, 24, 4.0, 7,'UAT'),
            this.createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 2,'SIT'),
            this.createData('Bread sandwich', 768, 9.0, 37, 4.3, 8,'SIT'),
            this.createData('Egg sandwich', 1234, 9.0, 37, 4.3, 9,'SIT'),
            this.createData('Eclair', 262, 16.0, 24, 6.0, 3,'DEV'),
            this.createData('Eclair chocolate', 31, 16.0, 24, 6.0, 10,'DEV'),
            this.createData('Eclair Spread', 67, 16.0, 24, 6.0, 11,'DEV'),
            this.createData('Cupcake', 305, 3.7, 67, 4.3, 4),
            this.createData('Gingerbread', 356, 16.0, 49, 3.9, 5),
        ];


        return (
            <div>
                <React.Fragment>
                    <CssBaseline />

                    <AppBar position="static" color="default" elevation={0} className={this.classes.appBar} >
                        <Toolbar className={this.classes.toolbar}>
                            <Typography variant="h6" color="inherit" noWrap  className={this.classes.toolbarTitle} >
                                Quick TFS release dashboard
          </Typography>

                        </Toolbar>
                    </AppBar>

                    <Container maxWidth="lg">
                        <Navbar navClick={this.handleClick} class={this.classes} ></Navbar>
                        
                            {
                                this.state.isDEV ? (<DEV dataDEV={this.rows} envDEV={this.state.selectedEnv} ></DEV>) : ('')
                            }
                            {
                                this.state.isSIT ? (<SIT dataSIT={this.rows} envSIT={this.state.selectedEnv} ></SIT>) : ('')
                            }
                            {
                                this.state.isUAT ? (<UAT dataUAT={this.rows} envUAT={this.state.selectedEnv} ></UAT>) : ('')
                            }
                            {/*{
                                this.state.isUAT ? (<UAT data={this.rows} env={this.state.selectedEnv} ></UAT>) : ('')
                            }

                            {
                                this.state.isUAT ? (<UAT data={this.rows} env={this.state.selectedEnv} ></UAT>) : ('')
                            }*/}

                      
                    </Container>
                </React.Fragment>
            </div>
        )
    }
}

export default withStyles(useStyles)(App)
//export default App

//https://stackoverflow.com/questions/45704681/react-material-ui-export-multiple-higher-order-components?rq=1
