var inputData = 'P|Carl Gustaf|Bernadotte T|0768-101801|08-101801 A|Drottningholms slott|Stockholm|10001 F|Victoria|1977 A|Haga Slott|Stockholm|10002 F|Carl Philip|1979 T|0768-101802|08-101802 P|Barack|Obama A|1600 Pennsylvania Avenue|Washington, D.C';
const input = `P|Carl Gustaf|Bernadotte
T|0768-101801|08-101801
A|Drottningholms slott|Stockholm|10001
F|Victoria|1977
A|Haga Slott|Stockholm|10002
F|Carl Philip|1979
T|0768-101802|08-101802
P|Barack|Obama
A|1600 Pennsylvania Avenue|Washington, D.C`;

var strSplit = input.split("\n");
let people = { family: {}};
let result;

for(var i = 0; i < strSplit.length; i++){
    
    const person = strSplit[i].split("|");

    if(person[0] === "P") {
        people.firstname = person[1];
        people.lastname = person[2];
    }else if (person[0] === "A"){
        people.street = person[1]
        people.city = person[2]
    }else if (person[0] === "F"){
        people.family.name = person[1]
        people.family.birthday = person[2]
    }else if (person[0] === "T"){
        people.mobilephone = person[1]
        people.landline = person[2]
    }
    
    
    if (person[0] === "P") {
        result += `\n<people>\n`;
        result += `    <person>\n`;
        result += `         <firstname>${people.firstname}</firstname>\n`;
        result += `         <lastname>${people.lastname}</lastname>\n`;
        result += `         <address>\n`;
        result += `            <street>${people.street}</street>\n`;
        result += `            <city>${people.city}</city>\n`;
        result += `         </address>\n`;
        result += `         <phone>\n`;
        result += `             <mobile>${people.mobilephone}</mobile>\n`;
        result += `             <landline>${people.city}</landline>\n`;
        result += `         </phone>\n`;
        result += `         <family>\n`;
        result += `             <name>${people.family.name}</adress>\n`;
        result += `             <adress>${people.city}</adress>\n`;
        result += `         </family>\n`;
        result += `    <person>\n`;
        result += `<people>\n`;
        result += "\n";
        people = {family: {}};
    }
}

console.log(result);
