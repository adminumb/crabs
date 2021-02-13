import { useState, useEffect } from 'react';

const useKeyPress = callback => {
    const [keyPressed, setKeyPressed] = useState()
    useEffect(() => {
        const downHandler = ({ key }) => {
            if (keyPressed !== key && key.length === 1) {
                setKeyPressed(key)
                callback && callback(key)
            }
        }

        const upHandler = () => {
            setKeyPressed(null)
        }

        //6
        window.addEventListener('keydown', downHandler)
        window.addEventListener('keyup', upHandler)

        return () => {
            //7
            window.removeEventListener('keydown', downHandler)
            window.removeEventListener('keyup', upHandler)
        };
    });
    //8
    return keyPressed
};

export default useKeyPress;