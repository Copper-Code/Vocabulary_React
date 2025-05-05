
import './App.css';
import AppHeader from './component/AppHeader'
import AppSearch from './component/AppSearch';
import AppItem from './component/AppItem';

import ItemPost from './component/ItemPost';
import items from './data/items';
import React, { useEffect, useState } from "react";


function App() {
/**-------------------------4-------------------- */

const[searchText,setSearchText]=useState('');

/**--------------------------2----------------------- */

/*เลือก แล้ว post*/ 
const [selectedItem,setSelectedItem]=useState(null);

 /**-------------------2------------- */
  /**ตัวแปรเก็บ component ไม่มีหน้าตา*/
  let itemPost = null;
  /*ตรวจว่ามีการคลิกการ์ดไหม ถ้ามีให้ทำในปีกกา*/ 
  if(!!selectedItem){
    itemPost =<ItemPost item={selectedItem} onBgClick={onItemCloseClick}/>
  }  

  /**-----------------3------------------------ */
  function onItemOpenClick(theItem){
    setSelectedItem(theItem);
  }
  function onItemCloseClick(){
    setSelectedItem(null);
  }


  /**-------------------------5------------------ */
 /* const filteredItems = items.filter((item)=>{
   return item.vocabulary.includes(searchText);
}); */


/**--------------------------1----------------------- */
const itemElements=items.filter((item)=>{
  return item.vocabulary.includes(searchText)}).map((item,index)=>{
  return <AppItem  key ={index} item={item} onItemClick={onItemOpenClick}/>;
});


  return (
    <div className="app">
      <AppHeader/>
     
      <section className="app-section">
        <div className="app-container">
            <AppSearch value={searchText} onValueChange={setSearchText}/>

        <div className="app-grid">
          {itemElements}
        </div>
          {itemPost}
        </div>
      </section>
      
    </div>

  );
}

export default App;
