import './AppItem.css';
function AppItem(props){
    const{item,onItemClick} = props
    return(
    
        <div className="app-card"  onClick={()=>{onItemClick(item)}}>
        <img src={item.imgVocabulary}/>
        <h1>{item.vocabulary}</h1>
        <p>{item.readVocabulary}</p>
        <h4>{item.transalate}</h4>
    </div>


    );
}
export default AppItem;