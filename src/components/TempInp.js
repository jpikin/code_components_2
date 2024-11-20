function TempInp({temp, setTemp}) {
    
    
    
    return ( 
    <>
    <input onChange={(event)=> setTemp(event.target.value)}/>
    </>
 );
}

export default TempInp;