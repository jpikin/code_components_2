function Verdict({temp}) {
    return ( <>
    <p>{temp <= 0 && <span>Лёд</span>}
    {/* {100 > temp > 0 && <span>Вода</span>} */}
    {temp > 100 && <span>Пар</span>}
    </p>
    </> );
}

export default Verdict;