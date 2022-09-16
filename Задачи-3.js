function showattr(obj){
    for (let key in obj)
        if (obj.hasOwnProperty(key))
            console.log(key)
}

a = {"a":1, "b":2}
showattr(a)

function checkattr(prop, obj){
    for (let key in obj)
        if (key == prop)
            return true
    return false
}

console.log(checkattr("c", a))

function creator(){
    let func = {}
    return func
}
