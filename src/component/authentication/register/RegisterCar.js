import React, { useState } from 'react'
import * as api from '../../../api/api'
import { useMutation } from '@apollo/react-hooks'

export default function RegisterCar(props) {

    const [values, setValues] = useState({
        driverId:'',
        carType:'',
        carOption:'',
    })

    const onChange =(e) =>{
        setValues({...values,[e.target.name]: e.target.value})
    }

    const onSubmit = (event) =>{
        event.preventDefault()
        console.log(values.driverId, values.carType, values.carOption)
        registerCar()
    }

    const [registerCar ,{ loading }] = useMutation(api.ADD_CAR, {
        variables: values,
        update(_,result){
            console.log(result);
            props.history.push('/driverslist')
        },
    })

    return (
        <div className='container'>
            <h1 className='my-4 text-center'>Register Car</h1>
            <form onSubmit={onSubmit}>

                <div className="form-group">
                    <label >DriverID</label>
                    <input
                        type="ID"
                        className="form-control"
                        name='driverId'
                        placeholder="Enter your DriverID"
                        value={values.driverId}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label >Car Type</label>
                    <input
                        type="text"
                        className="form-control"
                        name='carType'
                        placeholder="Select your Car Type"
                        value={values.carType}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label >Option</label>
                    <input
                        type="text"
                        className="form-control"
                        name='carOption'
                        placeholder="Option"
                        value={values.carOption}
                        onChange={onChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    )
}
