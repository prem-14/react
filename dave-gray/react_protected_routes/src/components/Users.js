import React, { useState, useEffect } from 'react'
import axios from '../api/axios'

const Users = () => {
    const [users, setUsers] = useState()

    useEffect(() => {

        const getUser = async () => {
            try {
                const result = await axios.post("/users")
                setUsers(result.data)
            } catch (e) {
                console.log(e)
            }
        }

        getUser()
    }, [])

    return (
        <div>
            <h3>Users list</h3>
            {users?.length ? (
                <ul>
                    {users.map(user => {
                        return <li>{user?.username}</li>
                    })}
                </ul>
            ) : "No users found"}
        </div>
    )
}

export default Users