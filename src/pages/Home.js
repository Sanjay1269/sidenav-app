import React, { useState } from 'react'
import { details } from '../persondata/PersonInfo'

function Home() {

    const [user, setuser] = useState(details)



    return (
        <div className='container'>
            <br />
            <div>
                <h1 style={{ textAlign: "center" }}>PERSON DETAILS</h1>
            </div>
            <br />
            <table className="table table-striped" style={{ margin: "auto", textAlign: "center" }}>
                <thead className='table table-dark'>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">City</th>
                        <th scope="col">Image</th>
                        <th scope='col' colSpan='2'>action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((value, index) => {
                            return <tr key={index}>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.age}</td>
                                <td>{value.city}</td>
                                <td><img height="100px" width="100px" src={value.img} /></td>
                                <td scope="col"><button className='btn btn-primary mt-auto'>Edit</button></td>
                                <td scope="col"><button className='btn btn-danger mt-auto'>delete</button></td>
                            </tr>
                        })
                    }
                </tbody>


            </table>
        </div>
    )
}

export default Home