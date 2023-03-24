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
let people = { family: [] };
let result = "<people>\n";

for (var i = 0; i < strSplit.length; i++) {
  const person = strSplit[i].trim().split("|");

  if (person[0] === "P") {
    if (i > 0) {
      result += generateXml(people);
      people = { family: [] };
    }
    people.firstname = person[1];
    people.lastname = person[2];
  } else if (person[0] === "A") {
    people.street = person[1];
    people.city = person[2];
    people.zip = person[3];
  } else if (person[0] === "F") {
    const familyMember = {
      name: person[1],
      birthday: person[2],
    };
    people.family.push(familyMember);
  } else if (person[0] === "T") {
    people.mobilephone = person[1];
    people.landline = person[2];
  }
}

result += generateXml(people);
result += "</people>\n";
console.log(result);

function generateXml(people) {
  let xml = `  <person>
    <firstname>${people.firstname}</firstname>
    <lastname>${people.lastname}</lastname>
    <address>
      <street>${people.street}</street>
      <city>${people.city}</city>
      <zip>${people.zip}</zip>
    </address>
    <phone>
      <mobile>${people.mobilephone}</mobile>
      <landline>${people.landline}</landline>
    </phone>\n`;

  people.family.forEach((member) => {
    xml += `    <family>
      <name>${member.name}</name>
      <born>${member.birthday}</born>
    </family>\n`;
  });

  xml += "  </person>\n";
  return xml;
}

