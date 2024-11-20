import TempInp from './TempInp';
import Verdict from './Verdict'
import {useState} from 'react';

export default function Calculator() {

    const [temp, setTemp] = useState();
    
    return  <div>
    <p>Введите температуру воды</p>
    <TempInp temp={temp} setTemp={setTemp} />
		<Verdict temp={temp} />
		
    </div> 
}

