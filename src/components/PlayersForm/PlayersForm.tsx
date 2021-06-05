import React from 'react'
import { useDispatch, useSelector, useStore} from 'react-redux';
import { useForm } from 'react-hook-form'
import { Input } from '../sharedComponents/Input'
import { Button } from '@material-ui/core'
import { server_calls } from '../../api'
import { useGetData } from '../custom-hooks'

interface PlayerFormProps{
    id? : string;
    data?: {}
}

interface PlayerState {
    name: string;
}

export const PlayersForm = (props: PlayerFormProps) => {
    const dispatch = useDispatch()
    let { playerData, getData } = useGetData() ;
    const store = useStore(); 
    const name = useSelector<PlayerState>( state => state.name)
    const { register, handleSubmit } = useForm ( { })
    
    const onSubmit = (data:any, event: any) => {
        console.log(props.id)
    }
    
    server_calls.update(props.id!, props.data)
    console.log(`Updated:${props.data} ${props.id}`)
    
    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="firstName"> Player's First Name</label>
                    <Input {...register('firstName')} name="firstName" placeholder='firstName'/>
                </div>
                <div>
                    <label htmlFor="lastName">Player's Last Name</label>
                    <Input {...register('lastName')} name="lastName" placeholder='lastName'/>
                </div>
                <div>
                    <label htmlFor="fullName">Player's Full Name</label>
                    <Input {...register('fullName')} name="fullName" placeholder='fullName'/>
                </div>
                <div>
                    <label htmlFor="age">Player's Age</label>
                    <Input {...register('age')} name="age" placeholder='age'/>
                </div>
                <div>
                    <label htmlFor="position">Player's Position</label>
                    <Input {...register('position')} name="position" placeholder='position'/>
                </div>
                <Button type='submit'> Submit </Button>
            </form>
        </div>
    ) 
}

