



const initialState = {
    data:[
        {
        id:null,
        result:null,
        status:null
    }
    ]
}

const resultsReducer = (state= initialState, action)=>{

    switch (action.type){
        case 'SET_DATA':
            let newData = {
                id: Math.floor(Math.random()*(100-1)),
                result: action.newResult,
                status : action.newResult <=64 ? 'КРАБ ОБЫЧНЫЙ' : ((action.newResult <=80 && action.newResult>64) ? 'БОЛЬШОЙ СУХОПУТНЫЙ КРАБ' :(isNaN(action.newResult )?'ЛЕНИВЫЙ КРАБ' :'КРАБ КОРОЛЕВСКИЙ'))

            };
            return {
                ...state,
                data: [...state.data, newData],
            };

        default:
            return state
    }


}



export const setDataAC=(newResult)=>({type:'SET_DATA', newResult})



export default resultsReducer