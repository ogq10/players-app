import React from 'react' 

let token = '87d83e0ce145c9cce7d06534b9812581207524b22c114a0f'

//object that holds all 4 api calls

export const server_calls = {
    get: async () => {
        const response = await fetch('https://drone-app-ogq.herokuapp.com/api/drones',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `Bearer ${token}`
        }
    })
    if (!response.ok){
        throw new Error('Failed to get data')
    }
    return await response.json();
    },

    create: async (data:any ={}) => {
        const response = await fetch('https://drone-app-ogq.herokuapp.com/api/drones',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }
        return await response.json()
    },

    update: async (id:string, data:any ={}) => {
        const response = await fetch('https://drone-app-ogq.herokuapp.com/api/drones/${id}',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
    },

    delete: async (id:string) => {
        const response = await fetch ('https://drone-app-ogq.herokuapp.com/api/drones/${id}', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    }
}