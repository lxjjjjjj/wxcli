import axios from 'axios'
const enter=(method,data)=>{
    axios({
        method:method,
        data
    })
}
export default enter