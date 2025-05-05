import './ItemPost.css'

function ItemPost(props){
    const {item,onBgClick}= props;
    return(
      
        <div className="item-post">  
            <div className="item-post-bg" onClick={onBgClick}>
            <div className="item-post-content">
                     <img src ={item.imgVocabulary}/>
                     <h4>{item.vocabulary}</h4>
                     <h4>{item.readVocabulary}</h4>
                     <h4>{item.transalate}</h4>
                    
            </div>
            </div>
        </div>
    );
}
export default ItemPost;