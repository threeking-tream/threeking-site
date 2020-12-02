

const actions = {

    userLogin(content,data){
        console.log('登录userLogin...'+data.name)
        localStorage.setItem('user', JSON.stringify(data))
        localStorage.setItem('x-auth-token', data.token)
    },
    userlogout(){
        console.log('退出userlogout...')
        localStorage.removeItem('user')
        localStorage.removeItem('x-auth-token')
    }
  
}

export default actions