function greet(name){
    if(name == ''){
        return 'Hello, my friend';
    }
    if(uppercase(name)){
        return 'HELLO ' + name + '!';
    }
    else{
    return 'Hello, ' + name;
    }
}

function uppercase(name){
    return name == name.toUpperCase();
}

module.exports = greet;