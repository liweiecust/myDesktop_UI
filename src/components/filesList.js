import React from 'react'
import Item from './Item'
import proTypes from 'prop-types'
class filesList extends React.Component{

    render(){
        return table(this.props.files);
    }
}
filesList.proTypes={
    files:proTypes.array.isRequired
}
const table=function (params) {
    return(
    <table>
    <thead>
        <tr><th>Path</th></tr>
        
    </thead>
    <tbody>
    {params[0].map(f=><Item type="folder" path={f}/>)}
    {params[1].map(f=><Item type="file" path={f}/>)}

    </tbody>
</table>
    )
}
export default filesList;