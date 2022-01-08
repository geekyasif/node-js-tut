const register = function(username){
    console.log(`USer ${username} has been registered`)
}

const login = function(username){
    console.log(`User ${username} is logged in `)
}

// this will not work we can only import one module
// module.exports = register
// module.exports = login


// to import mutiple module 

module.exports = {
    // register : register,
    // login : login,
    register,
    login,

}

