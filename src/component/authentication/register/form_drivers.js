import React, { useState } from 'react'
import * as api from '../../../api/api'
import { useMutation } from '@apollo/react-hooks'

export default function Form_driver(props) {

    const [values, setValues] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        idnumber: '',
        phnumber: '',
    })

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(values.name, values.surname, values.email, values.password)
        registerDriver()
    }

    const [registerDriver] = useMutation(api.CREATE_DRIVER_QUERY, {
        variables: values,
        update(_, result) {
            console.log(result);
            props.history.push('/login')
        },
    })

    const RegisterCar = (e) => {
        props.history.push('/registercar')
    }

    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-12 col-md-6 offset-md-3">
                    <h1 className="my-4 text-center">Register Driver</h1>

                    <form onSubmit={onSubmit}>

                        <div className="form-group">
                            <label htmlFor="Register_Name">Name</label>
                            <input
                                type="name"
                                className="form-control"
                                id="Register_Name"
                                name='name'
                                placeholder="Enter your Name"
                                value={values.name}
                                onChange={onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Register_Surname">Surname</label>
                            <input
                                type="surname"
                                className="form-control"
                                id="Register_Surname"
                                name='surname'
                                placeholder="Enter your Surname"
                                value={values.surname}
                                onChange={onChange}
                            />

                        </div>
                        <div className="form-group">
                            <label htmlFor="Register_Idnumber">Identification Number</label>
                            <input
                                type="number"
                                className="form-control"
                                id="Register_Idnumber"
                                name='idnumber'
                                placeholder="x-xxxx-xxxxx-xx-x"
                                value={values.idnumber}
                                onChange={onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Register_Phonenumber">Phone No.</label>
                            <input
                                type="number"
                                className="form-control"
                                id="Register_Phonenumber"
                                name='phnumber'
                                placeholder="xxx-xxx-xxxx"
                                value={values.phnumber}
                                onChange={onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Register_Email">Email</label>
                            <input
                                type="Email"
                                className="form-control"
                                id="Register_Email"
                                name='email'
                                placeholder="Enter your Email"
                                value={values.email}
                                onChange={onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Register_Password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="Register_Password"
                                name='password'
                                placeholder="Password"
                                value={values.password}
                                onChange={onChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                        <button className="btn btn-primary" onClick={RegisterCar}>
                            Register Car
                        </button>
                    </form>

                </div>
            </div>
        </div>
    )
}
