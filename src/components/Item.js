import React from "react"
import Folder from './Folder'
import File from './File'
import proType from 'prop-types'

class Item extends React.Component{

    render(){
        if(this.props.type==="folder")
        {
            return <Folder path={this.props.path}/>
        }
        else{
            return <File path={this.props.path}/>

        }
    }
}
Item.proType={
    type:proType.oneOf(["folder","file"]),
    path:proType.string.isRequired
}
export default Item;