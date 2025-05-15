import React, { useRef, useState } from "react";

function hackLottoNumber() {

    const lottoNumbers = [];

    for(let i=0; i<6; i++){
        //0-45 랜덤
        const number = Math.floor(Math.random()*45)+1;
        lottoNumbers.push(number);
    }

    return lottoNumbers;

}



const ThrottleExample = () => {

    const [lottoNumber, setLottoNumber] = useState([0,0,0,0,0,0]);

    const lastRun = useRef(Date.now());


    const handleClick = () => {
        const timeElapsed = Date.now() - lastRun.current;
        if(timeElapsed >= 1000){
            const result = hackLottoNumber();
            setLottoNumber(result);

            lastRun.current = Date.now();
        }

    }

    return(
        <div>
            <h1>로또번호 맞추기</h1>

            <button onClick={handleClick}>번호 맞추기</button>
            {lottoNumber.map( (lotto) => (
                <span style={{paddingRight:'10px'}}>
                    { lotto }
                </span>

            ))}

        </div>
    )
}

export default ThrottleExample;