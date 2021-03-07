import React , { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Form_drivers from './component/authentication/register/form_drivers'
import Form_users from './component/authentication/register/form_users'
import Homepage from './component/homepage'
import RegisterCar from './component/authentication/register/RegisterCar'
import CreateRoom from './component/requestMethod/createRoom'
import Login from './component/authentication/login' 


import UsersList from './component/showList/UsersList'
import driversList from './component/showList/driversList'

import Nav from './nav/nav'

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div>
          <Switch>
            <Route exact path='/' component={Homepage}></Route>
            <Route path='/drivers' component={Form_drivers}></Route>
            <Route path='/users' component={Form_users}></Route>
            <Route path='/userslist' component={UsersList}></Route>
            <Route path='/driverslist' component={driversList}></Route>
            <Route path='/registerCar' component={RegisterCar}></Route>
            <Route path='/createRoom' component={CreateRoom}></Route>
            <Route path='/login' component={Login}></Route>
          </Switch>
        </div>
      </div>
    )
  }
}

