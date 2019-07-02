import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect, Link} from 'react-router-dom';

class Router extends  Component{
    state = {
        login: false
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState(() => ({
                login : true
            }))
        }, 3000)
    }

    render(){
        const {login} = this.state
        return(
            <BrowserRouter>
                <Switch>
                     <Route exact path="/" component={Home}/>
                     <PrivateRoute login = {login}  path="/dashboard" component={Dashboard}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

const PrivateRoute = ({component: Component, login, ...rest}) => {
    console.log(login)
    return(
        <Route {...rest}
            render={(props)=> login ? <Component {...props}/> : <Redirect to="/" />}
         />
    )
}

const Home = (props) => {
    console.log(props)
    return(
        <div>
            <p>Home</p>
            <button onClick={() => props.history.push("/Dashboard")}> Click </button>
        </div>
    )
}

class Dashboard extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div>
                <p>Dashboard</p>
                <button onClick={() => this.props.history.goBack("/")}> Click </button>
            </div>
        )
    }
}


export default Router;