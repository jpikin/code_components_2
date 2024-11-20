import { useState, useEffect } from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Block from './components/Block';


export default function App() {

  function getSum(arr) {
    let res = 0;
    
    for (let elem of arr) {
      res += +elem;
    }
    
    return res;
  }

  const [value, setValue] = useState(''); // Текущее значение инпута
  const [nums, setNums] = useState([1, 2, 3]); // Массив чисел
  const [sum, setSum] = useState(6); // Сумма элементов массива nums

  // Обновляет массив и пересчитывает сумму при изменении массива nums
  useEffect(() => {
    setSum(getSum(nums));
  }, [nums]);

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleBlur(event) {
    const newNum = event.target.value;
    setValue('')

    if (!isNaN(newNum)) {
      setNums(prevNums => [...prevNums, newNum]); // Добавляем новый элемент в массив
    }
  }


  return (
    <div>
      <Calculator />


      <p className='class'>{sum}</p>
      <input value={value} onChange={handleChange} onBlur={handleBlur} />

      <Block block={true} reset='reset' />
    </div>
  );
}


