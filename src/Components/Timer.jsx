import React from 'react'


const Timer= ({flagTimer})=>{
    flagTimer=true
    const [sec, setSec]=React.useState(60)

    React.useEffect(()=>{
        let interval = null;
        if(flagTimer) {
            interval = setInterval(() => {
                setSec(sec - 1)
            if(sec===0)
                    clearInterval(interval)
            }, 1000)
        }


          return ()=>clearInterval(interval)
    }, [flagTimer,sec])

    return(
        <div>
            {sec} s
            {console.log(sec)}
        </div>
    )
}

export default Timer