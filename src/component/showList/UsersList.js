import React from 'react'
import * as api from '../../api/api'
import { useQuery } from '@apollo/react-hooks'

export default function UsersList() {

    const { loading, error, data } = useQuery(api.GET_QUERY)
    if (loading) return <p>loading Users.....</p>
    if (error) return <p>Error</p>

    return (
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
                <h1 className='my-4 text-center'>Member List</h1>
                {
                    data.getUser.map(({
                        id,
                        name,
                        email,
                        surname,
                        idnumber,
                        phnumber }) => (

                        <div key={id} className='card m-2'>
                            <div className='card-body'>
                                <h2>{name} {surname}</h2>
                                <p>{email}</p>
                                <p>Identification No. : {idnumber}</p>
                                <p>Phone No. : {phnumber}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
