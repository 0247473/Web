import React from "react";
import Card from "./components/Card.jsx"
import contacts from './data.js';
import { useState } from 'react';

function Directory(props){

    var filteredContacts = contacts.filter((contact) => {
        return contact.name === "Bobby";
      });
    
      var filteredContactsbyFind = contacts.filter((contact) => {
        return contact.phone.includes("5");
      });
    
       var resultAge = contacts.reduce((result, {age}) => {
         return result + age;
       }, 0);
    
      var resultName = contacts.reduce((result, {name}) => {
        return result + name;
      }, "");
    
      var result = contacts.reduce(
        (result, {name, age}) => {
        result.concatName = result.concatName + "-" + name;
        result.ageTotal = result.ageTotal + age;
        return result;
      }, 
      {concatName: "", ageTotal: 0}
      );
    
      function mapContacts(cardsToMap) {
        return cardsToMap.map((contact) => (
          <Card 
          name={contact.name} 
          img={contact.picture} 
          phone={contact.phone}
          />
        ));
      }
    
      const [filterString, setFilterString] = useState("");
      var filteredContacts2= contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(filterString.toLowerCase());
      });
    
    
    var cards = 
    filteredContacts2.length > 0 
    ? mapContacts(filteredContacts2) 
    : mapContacts(contacts);
    
    function filterListener(event){
      console.log(event.target.value)
      setFilterString(event.target.value);
      console.log("Filter: " + filterString);
    }

    function logOut() {
      props.listener()
    }

    return (
        <div>
          <div>
            <button onClick={logOut}>LogOut</button>
          </div>
        <input
          type='text'
          placeholder='Search'
          onChange={filterListener}
          value={filterString}
        />
      <p>{result.ageTotal + "=" + result.concatName}</p>
      {cards}
        </div>
    )
    
}

export default Directory;