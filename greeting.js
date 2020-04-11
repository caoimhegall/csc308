function greet(names){
    if (Array.isArray(names)) {
        newNames = parseNames(names);
        return `Hello, ${group(newNames)}` + '.';
    }
    if(names == ''){
        return 'Hello, my friend.';
    }
    if(shouting(names)){
        return 'HELLO ' + names + '!';
    }
    else{
    return 'Hello, ' + names + '.';
    }
}

function shouting(name){
    return name == name.toUpperCase();
}

function group(names){
    if(names.some(shouting)){
        return names.filter(name=>!shouting(name)).join(', and ') + '.' + ` AND HELLO ${names.filter(name=>shouting(name))}!`;
    }
    if (names.length > 2){
        newNames = oxfordComma(names);
        return newNames.join('');
    }
    else{
        return names.join(' and ');
    }
}

/*adds oxford comma*/
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

/*takes array of names and returns array of names split if they contain a delimiter or comma*/
function parseNames(names) {
    return names.reduce((parsedList, name) => {
        if (name.indexOf('"') !== -1) {
            parsedList.push(name.replace(/"/g, ''))
        } else if (name.indexOf(',') !== -1) {
            parsedList.push(...name.split(',').map(name => name.trim()));

        } else {
            parsedList.push(name)
        }
        return parsedList;
    }, [])
}

module.exports = {greet};