import React from "react";
import rand from "./Words";
import useKeyPress from "./KeyPress";
import {useState} from 'react'
import './GameField.modudle.css'
import Timer from "./Timer";
import Results from "./Results";
import {CountdownCircleTimer} from "react-countdown-circle-timer"



const initialWords = rand();

const GameField=()=>{

    const [leftPadding, setLeftPadding] = useState(new Array(20).fill(' ').join(''))
    const [outgoingChars, setOutgoingChars] = useState('')
    const [currentChar, setCurrentChar] = useState(initialWords.charAt(0))
    const [incomingChars, setIncomingChars] = useState(initialWords.substr(1))

    const [wordCount, setWordCount] = useState(0)
    const [mistake, setMistake]=useState(0)
    const [flagTimer, setFlagTimer]=useState(false)
    const [flagTimerWraper, setFlagTimerWraper]=useState(false)

//переключалка время/кнопки
const onSelected=()=>{
        setFlagTimer(!flagTimer)
    setFlagTimerWraper(!flagTimerWraper)
}


    useKeyPress(key => {

        let updatedOutgoingChars = outgoingChars
        let updatedIncomingChars = incomingChars
                   //начало после запуска таймера
        if (key === currentChar && flagTimer) {


           //отстпупы
            if (leftPadding.length > 0) {
                setLeftPadding(leftPadding.substring(1))
            }

            updatedOutgoingChars += currentChar
            setOutgoingChars(updatedOutgoingChars)

            setWordCount(wordCount + 1)
            setCurrentChar(incomingChars.charAt(0))

            updatedIncomingChars = incomingChars.substring(1)
            if (updatedIncomingChars.split(' ').length < 10) {
                updatedIncomingChars += ' ' + rand()
            }


            setIncomingChars(updatedIncomingChars)
        }
        if(key!==currentChar && flagTimer) {
            setMistake(mistake + 1)
        }

    });

let result;
    result=Math.round(100 - mistake/wordCount*100)
if(result<0)
    result =0
    else if (result>100)
        result =100
    return(
        <div className={'Container'}>
            <h1 >ЗАЦЕНИ СВОИ КЛЕШНИ</h1>
            <p className="Character">
                <div className="Character__items">
      <span className="Character-out">
        {(leftPadding + outgoingChars).slice(-20)}
      </span>
                <span className="Character-current">{currentChar}</span>
                <span>{incomingChars.substr(0, 20)}</span>
                </div>
                <h3>
                    COUNT WORDS:{wordCount}
                </h3>
                <h3>
                    MISTAKES:{mistake}
                </h3>
                <h3>
                    RESULTS :{result} %
                </h3>
                <div className={'Timer'}>
                    <a className={'Timer__item'} onClick={()=>setFlagTimer(!flagTimer)} >
                    < CountdownCircleTimer
                        isPlaying={flagTimer?true:false}
                        duration={60}

                        colors={[
                            ['#004777', 0.33],
                            ['#F7B801', 0.33],
                            ['#A30000', 0.33],
                        ]}
                        size={100}
                        strokeWidth={20}

                    >
                        {({ remainingTime }) => remainingTime}
                    </CountdownCircleTimer>
                    </a>

                </div>

                <button disabled={flagTimer?true:false} onClick={()=>onSelected()}>START</button>
                <Results  flagTimer={flagTimer}  result={result}/>

            </p>
        </div>
    )
}


export default GameField