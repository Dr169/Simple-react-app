import React, {useState} from 'react'
import countriesData from './countries.json'
import {Country} from './country'


let countries = countriesData;
let id = 0
countries.map((country)=>{
    country.id = id
    id += 1 
})

console.log(countries)

const SearchBar = () => {

    const [search, setNewSearch] = useState("");

    const handleSearchChange = (e) => {
        setNewSearch(e.target.value);
      };

    const filtered = !search ? countries : countries.filter(
        (country) => country.name['common'].toLowerCase().includes(search.toLowerCase())
    );


    return(
        <>
            <div className='nav-bar'>
                <h1>Country App</h1>
                <input
                type="search"
                placeholder="Search here"
                onChange={handleSearchChange}
                value={search} />
            </div>
            <div className='countries'>
                {filtered.map((country) => {
                    return (
                    <Country key={country.id} {...country}/>
                    );
                })}
            </div>
        </>
    );
};

export default SearchBar;