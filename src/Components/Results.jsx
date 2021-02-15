import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {setDataAC} from "../Redux/resultsReducer";
import PageResult from "./PageResult";




const Results=({result, flagTimer})=>{

    const dispatch=useDispatch()

    const status= useSelector(({resultReducer})=>resultReducer.data)
const [flagAlert, setFlagAlert]=React.useState(false) // отображение редакса




    //диспатч экшена
    const saveData=(data)=>{
        dispatch(setDataAC(data))
        setFlagAlert(true)
        console.log(status)
    }

    return (
        <div>

            <button  disabled={flagTimer?true:false}  onClick={()=>saveData(result)}>SAVE</button>

            {/*{ flagAlert &&*/}
            {/*    console.log(`YOUR RESULT: ${result}, STATUS:${status}`)*/}
            {flagAlert &&
            status.map( d => <PageResult result={d.result} key={d.id} id={d.id} status={d.status} /> )
            }
        </div>

    )

}
export default Results