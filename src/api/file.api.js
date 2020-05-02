import axios from 'axios'
import config from '../config'
//const serverUrl="http://172.17.13.177:5000"
class FileApi{
    static viewFile(path) {
        new Promise((resolver,reject)=>
        axios.get(config.serverurl+"/view",{file:path,timeout:10000})
        .then(
            response=>{return response.data}
        )
        .catch(
            err=>{
                return err;
            }
        )    
        )
    } 
    
    static downLoad(path){
        axios.get(config.serverUrl+"/download",{file:path})
    }
    
}

