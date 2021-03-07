import React, { useState } from 'react'
// import { Redirect } from 'react-router-dom'
// import * as api from '../../api/api'
// import { useQuery } from '@apollo/react-hooks'

export default function MeQuery(props) {

    const [values, setValues] = useState({
        email: '',
        password: '',
    })

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(values.email, values.password)
        // meQuery()
    }

    // const [meQuery ,{ loading }] = useQuery(api.GET_QUERY, {
    //     variables: values,
    //     update(_,result){
    //         console.log(result);
    //         // props.history.push('/')
    //     },
    // })

    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-12 col-md-6 offset-md-3">
                    <h1 className="my-4 text-center">Login</h1>

                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="Login_email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="Login_email"
                                name='email'
                                placeholder="Enter your Email"
                                value={values.email}
                                onChange={onChange}

                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Login_password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="Login_password"
                                name='password'
                                placeholder="Enter your Password"
                                value={values.password}
                                onChange={onChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                    </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
