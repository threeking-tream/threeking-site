

const actions = {

    userLogin(content,data){
        console.log('登录userLogin...'+data.name)
        localStorage.setItem('user', JSON.stringify(data))
    },
    userlogout(){
        console.log('退出userlogout...')
        localStorage.removeItem('user')
    }
}

export default actions