import React from 'react'
import proType from 'prop-types'
import folderImg from '../images/Capture.PNG'

class Folder extends React.Component{
    constructor(props){
        super(props);
        this.onClick=this.onClick.bind(this);
    }
    render(){
        return(
            <tr onClick={this.onClick}>
                <td>
                    <img src={folderImg}/>
                </td>
                <td>
                    {this.props.path}
                </td>
              
            </tr>
        )
    }
    onClick(){
        alert(this.props.path);
      //axios.post("http://localhost:5000/file/",{'file':this.props.name})
    }
}
Folder.proType={
    path:proType.string.isRequired
}
export default Folder;