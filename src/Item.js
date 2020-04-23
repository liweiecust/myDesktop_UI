import React from "react"
import fileimg from "./logo192.png"
import folderimg from "./Capture.PNG"
import axios from 'axios'

class Item extends React.Component{
    constructor(props){
     super();
     this.state={img:""}

     this.state.img=folderimg;
     if(props.type==="folder")
     {
         this.state.img=fileimg;
     }
     this.onClick=this.onClick.bind(this);
    }
    onClick(){
        alert(this.props.name)
      axios.post("http://localhost:5000/file/",{'file':this.props.name})
  }

    render(){
        return (
            <div>
                <td>
                <img src={this.state.img} alt="file/folder"/>
                </td>
                <td onClick={this.onClick}><div>{this.props.name}</div>
                </td>
            </div>
        )

    }
}
export default Item;