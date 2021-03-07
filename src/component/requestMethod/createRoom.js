import React , {useState}from 'react'
import * as api from '../../api/api'
import { useMutation } from '@apollo/react-hooks'

export default function CreateRoom() {

    const [carType, setCarType] = useState()
    const [dateTime, setDateTime] = useState()

    const [addRoomRequest] = useMutation(api.REQUEST_ROOM)

    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-12 col-md-6 offset-md-3">
                    <h1 className="my-4 text-center">Request Room</h1>

                    <form onSubmit={e => {
                        e.preventDefault()
                        console.log(carType, dateTime)
                        addRoomRequest({ variables: { carType,dateTime } });
                        window.location.reload();
                    }}>

                        <div className="form-group">
                            <label htmlFor="Request_cartype">CarType</label>
                            <input
                                type="text"
                                className="form-control"
                                id="Request_cartype"
                                placeholder="Enter your CarTypr"
                                value={carType}
                                onChange={e => setCarType(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Request_Time">Date/Time</label>
                            <input
                                type="text"
                                className="form-control"
                                id="Request_Time"
                                placeholder="Enter your Date/Type"
                                value={dateTime}
                                onChange={e => setDateTime(e.target.value)}
                                
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
