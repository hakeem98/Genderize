import React, { useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import './SearchBar.css'
import axios from 'axios'

const SearchBar = ({ theme }) => {
  const [users, setUsers] = useState([]);
  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [gender, setGender] = useState('');
  const [fullName, setFullName] = useState('');

  useEffect(() => {
    const LoadUsers = async () => {
      const resonse = await axios.get('https://randomuser.me/api/?results=50');
      setUsers(resonse.data.results);
    }

    LoadUsers();
  }, [])

  const onSuggestHandler =  ( text , gender) => {
    setText(text);
    setSuggestions([])
    setFullName(text);
    setGender(gender);
  }
  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = users.filter((user) => {
        const regex = new RegExp(`${text}`, "gi");
        return user.name.first.match(regex);
      })
    }
    setSuggestions(matches);
    console.log('matches', matches);
    setText(text);
  }


  return (
    <>
      <div className={`container ${theme}`}>
        <input className={`input-field`}
          type="text"
          onChange={(e) => onChangeHandler(e.target.value)}
          value={text}
        />
        <BiSearch id="icon" className={`${theme}`} />
      </div>
      <div className={`list-conatiner ${theme}`}>
        {suggestions && suggestions.map((suggestion, i) => {
          const userName = suggestion.name.first + " " + suggestion.name.last;
          const userGender = suggestion.gender
          return (
            <>
            <div key={i} className={`suggestion`}
              onClick={() => onSuggestHandler(userName, userGender)}
            >
              {userName}
            </div>
            </>
          )
            }
          )
        }
      </div>
      <div className={`details ${theme}`}>
          <h4 className={`${theme}`}>Your name is: {fullName}</h4>
          <h4>Your gender is: {gender}</h4>
        </div>
    </>
  )
}

export default SearchBar