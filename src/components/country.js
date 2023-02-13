export const Country = (props) =>{
    const{ name, flags, continents} = props

    return(
    <div className='country'>
      <h3>{name['common']}</h3>
      <h5>{continents}</h5>
      <img src={flags['svg']}></img>
    </div>)
  };