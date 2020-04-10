function greet(names){
    if (Array.isArray(names)) {
        newNames = parseNames(names);
        return `Hello, ${group(newNames)}` + '.';
    }
    if(names == ''){
        return 'Hello, my friend.';
    }
    if(uppercase(names)){
        return 'HELLO ' + names + '!';
    }
    else{
    return 'Hello, ' + names + '.';
    }
}

function uppercase(name){
    return name == name.toUpperCase();
}

function group(names){
    if (names.length > 2){
        newNames = oxfordComma(names);
        return newNames.join('');
    }
    else{
        return names.join(' and ');
    }
}

function oxfordComma(names){
    var namesWithCommas = [];
    n = names.length - 1;
    names.splice(n, 0, "and");
    tot = names.length;
    for(i = 0; i < tot; i++){
        namesWithCommas.push(names[i]);
        if(i < tot - 2){
            namesWithCommas.push(', ');
        }
        else if((tot - i) > 1){
            namesWithCommas.push(' ');
        }
    }
    return namesWithCommas;
}

/*takes array of names and returns array of names split */
function parseNames(names) {
    return names.reduce((greetGroup, name) => {
        if (name.indexOf('"') !== -1) {
            greetGroup.push(name.replace(/"/g, ''))
        } else if (name.indexOf(',') !== -1) {
            greetGroup.push(...name.split(',').map(name => name.trim()));

        } else {
            greetGroup.push(name)
        }
        return greetGroup
    }, [])
}

module.exports = {greet};