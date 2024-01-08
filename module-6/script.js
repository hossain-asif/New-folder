
function addPerson(){


    var personName = document.getElementById("person_name").value;
    var personAge = document.getElementById("person_age").value;

    var table = document.getElementById("person_table").getElementsByTagName("tbody")[0];


    var newRow = table.insertRow(0);

    var nameCell = newRow.insertCell(0);
    var ageCell = newRow.insertCell(1);
    var infoCell = newRow.insertCell(2);

    nameCell.innerHTML = personName;
    ageCell.innerHTML = personAge;

    personAgeValue = parseInt(personAge);

    if(personAgeValue<13){
        infoCell.innerHTML = "Children";
    }
    else if(personAgeValue<18){
        infoCell.innerHTML = "Adolescence";
    }
    else if (personAgeValue<24){
        infoCell.innerHTML = "Adult but young";
    }
    else {
        infoCell.innerHTML = "Adult";
    }


    var result1 = document.getElementById("verificationAdultCard");
    var result2 = document.getElementById("verificationChildCard");

    if(personAgeValue<18){
        result2.style.filter = 'blur(' + 0 + 'px)';
        result2.style.transition = '2s ease';
        result1.style.filter = 'blur(' + 30 + 'px)';
    }
    else{
        result1.style.filter = 'blur(' + 0 + 'px)';
        result1.style.transition = '2s ease';
        result2.style.filter = 'blur(' + 30 + 'px)';

    }


}
