import TempInp from './TempInp';
import Verdict from './Verdict'
import {useState} from 'react';

export default function Calculator() {

    const [temp, setTemp] = useState('1');
    
    return  <div>
		<Verdict temp={temp} />
		<TempInp temp={temp} setTemp={setTemp} />
    </div> 
}

