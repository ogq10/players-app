import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        name: 'classic drone',
        price: '2000.00',
        description: "Redefine what's possible",
        cam_quality: '4k',
        flight_time: 'Approx 20mins', 
        max_speed: '140 kph', 
        dimensions: '244 x 312 x 127mm',
        weight: 'Approx 795g', 
        cost_of_prod: 450.00, 
        series: ' DJI FPV Series'
    },
    reducers: {
        chooseName: (state: { name: any; }, action: { payload: any; }) => { state.name = action.payload },
    }
})

//export reducers

export const reducer = rootSlice.reducer;
export const { chooseName } = rootSlice.actions