import React from "react";
import rand from "./Words";
import useKeyPress from "./KeyPress";
import {useState} from 'react'
import './GameField.modudle.css'
import Timer from "./Timer";
import Results from "./Results";
const initialWords = rand();

const GameField=()=>{

    const [leftPadding, setLeftPadding] = useState(new Array(20).fill(' ').join(''))
    const [outgoingChars, setOutgoingChars] = useState('')
    const [currentChar, setCurrentChar] = useState(initialWords.charAt(0))
    const [incomingChars, setIncomingChars] = useState(initialWords.substr(1))

    const [wordCount, setWordCount] = useState(0)
    const [mistake, setMistake]=useState(0)





    useKeyPress(key => {

        let updatedOutgoingChars = outgoingChars
        let updatedIncomingChars = incomingChars

        if (key === currentChar) {



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
        if(key!==currentChar) {
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
                <h3>
                </h3>
                <Results  result={result}/>
            </p>
        </div>
    )
}


export default GameField