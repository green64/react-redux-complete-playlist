//have to import this into all components
import React from 'react';

//this is now a functional component
//adding deleteNinja here lets us call this function here
const Ninjas = ({ninjas, deleteNinja}) => {
    // const ninjaList = ninjas.map(ninja => {
    //   if (ninja.age > 20){
    //   return (
    //     <div className="ninja" key={ninja.id}>
    //     <div>Name: {ninja.name}</div>
    //     <div>Age: {ninja.age}</div>
    //     <div>Belt: {ninja.belt}</div>
    //     <br />
    //   </div>
    //   )
    // } else {
    //   return null
    // }
    // })
    //these changes made in exercise 16
    const ninjaList = ninjas.map(ninja => {
      if (ninja.age > 20) {
        return (
          <div className="ninja" key={ninja.id}>
          <div>Name: {ninja.name}</div>
          <div>Age: {ninja.age}</div>
          <div>Belt: {ninja.belt}</div>
          {/*delete function will be automatically called unless we put it in an anonymous function*/}
          <button onClick={() => {deleteNinja(ninja.id)}}>Delete ninja</button>
          <br />
          </div>
      ) 
      } else {
      return null
      }
    })
    return(
     <div className="ninja-list">
       { ninjaList }
     </div>
    )
  }


export default Ninjas