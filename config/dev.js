import defaults from './default'
//小程序没有测试环境，只有一个环境wx.env
//所以需要自己配置环境
export default Object.assign({},defaults,{
    port:9005,
    host:'http://localhost:9001',
    redis:{
        host:'localhost',
        port:6379,
        password:'root',
        db:2,
        connectTimeout:3000,
        prefix:'koala'
    }
})