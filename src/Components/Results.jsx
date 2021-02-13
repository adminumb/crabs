import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {setDataAC} from "../Redux/resultsReducer";
import PageResult from "./PageResult";




const Results=({result})=>{

    const dispatch=useDispatch()

    const status= useSelector(({resultReducer})=>resultReducer.data)
const [flagAlert, setFlagAlert]=React.useState(false)




    const saveData=(data)=>{
        dispatch(setDataAC(data))
        setFlagAlert(true)
        console.log(status)
    }

    return (
        <div>

            <button onClick={()=>saveData(result)}>SAVE</button>

            {/*{ flagAlert &&*/}
            {/*    console.log(`YOUR RESULT: ${result}, STATUS:${status}`)*/}
            {flagAlert &&
            status.map( d => <PageResult result={d.result} key={d.id} id={d.id} status={d.status} /> )
            }
        </div>

    )

}
export default Results