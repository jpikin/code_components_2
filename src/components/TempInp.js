function TempInp({temp, setTemp}) {
    
    
    
    return ( 
    <>
    <input temp={temp} onChange={(event)=> setTemp(event.target.value)}/>
    </>
 );
}

export default TempInp;