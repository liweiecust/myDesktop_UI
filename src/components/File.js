import React from 'react'
import proType from 'prop-types'
import fileImg from '../images/logo192.png'
import downLoad from '../api/file.api'

class File extends React.Component{
    constructor(props){
        super(props);
        this.onClick=this.onClick.bind(this);
    }
    render(){
        return(
            <tr onClick={this.onClick}>
                <td>
                    <img src={fileImg}/>
                </td>
                <td>
                    <a herf={this.props.path}>{this.props.path}</a>
                    
                </td>
             
            </tr>
        )
    }
    onClick(){
        alert("hi,how are you");
        
    }
}
File.proType={
    path:proType.string.isRequired
}
export default File;