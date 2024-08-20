import { useState } from "react";

const ItemRow = ({item, onDoneFlag, onDelete, onEdit})=>{
    const [flag, setFlag] = useState(false);
    const [outputTitle, setOutputTtile] = useState(item.title);
    const lineThroughClass = {textDecoration:"line-through", color:"blue"}
    return(<div className="input-group mb-3">
        <div className="input-group-prepend">
          <div className="input-group-text">
          <input onChange={()=>{
              onDoneFlag(item);
          }} checked={item.done&&"checked"} type="checkbox" />
          </div>
        </div>
          <input 
              style={ item.done?lineThroughClass:{}} 
              type="text" className="form-control" 
              readOnly={flag?"":"readOnly"} 
              value={outputTitle}
              onChange={(e)=>{
                  setOutputTtile(e.target.value);
              }}
              onFocus={(e)=>{
                  setFlag(true);
              }}
              onBlur={(e)=>{
                console.log("blur");
                setFlag(false);
              }}
              />
          <div className="input-group-append">
              <button onClick={()=>{
                onEdit({no:item.no, title:outputTitle, done:item.done});
              }} className="btn btn-primary" type="button">Edit</button>  
              <button onClick={()=>{
                  onDelete(item);
              }} className="btn btn-danger" 
              type="button">Delete</button>  
        </div>
      </div>);
}

export default ItemRow;