import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "What use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "What do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
      label: 'The Color Red',
      value: 'red'
  },
  {
      label: 'The Color Green',
      value: 'green'
  },
  {
      label: 'A Shade of Blue',
      value: 'blue'
  }
]

// const showAccordion = () => {
//   if (window.location.pathname === '/') {
//     return <Accordion items={items}/>
//   }
// }
// const showList = () => {
//   if(window.location.pathname === '/list') {
//     return <Search />
//   }
// }
// const showDropwdown = () => {
//   if(window.location.pathname === '/dropdown') {
//     return <Dropdown />
//   }
// }
// const showTranslate = () => {
//   if(window.location.pathname === '/translate') {
//     return <Translate />
//   }
// }

// const showComponent = (route, component) => {
//   return window.location.pathname === route
//   ?component:null
// }


export default () => {
  const [selected, setSelected] = useState(options[0]);
  // const [showDropwdown, setShowDropDown] = useState(true)

  return (
    // <div>
    //   <button onClick={() => setShowDropDown(!showDropwdown)}>Toggle Dropdown</button>
    //   {showDropwdown ?
    //   <Dropdown 
    //   options={options}
    //   onSelectedChange={setSelected}
    //   selected={selected}/> 
    //   : null}
    // </div>
    <div>
      <Header />
      <Route path='/'>
      <Accordion items={items} />
      </Route>
      <Route path='/list'>
        <Search />
      </Route>
      <Route path='/dropdown'>
        <Dropdown label="select a Color"
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
        />
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
    </div>

  );
};
