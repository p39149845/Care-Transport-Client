import React from 'react'
import * as api from '../../api/api'
import { useQuery } from '@apollo/react-hooks'

export default function DriversList() {

    const { loading, error, data } = useQuery(api.GET_QUERY)
    if (loading) return <p>loading Users.....</p>
    if (error) return <p>Error</p>

    return (
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
                <h1 className='my-4 text-center'>Driver List</h1>
                {
                    data.getDriver.map((getDriver) => (
                        <div key ={getDriver.id} className='card m-2'>
                            <div className='card-body'>
                                <h2>{getDriver.name} {getDriver.surname}</h2>
                                <p>DriverID :{getDriver.id}</p>
                                <p>{getDriver.email}</p>
                                <p>Identification No. : {getDriver.idnumber}</p>
                                <p>Phone No. : {getDriver.phnumber}</p>
                                <h3>Car</h3>
                                {getDriver.car.map((getDriver) =>
                                    <ul key={getDriver.carId}>
                                        <li>CarType : {getDriver.carType}</li>
                                        <li>Option : {getDriver.carOption}</li>
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}
