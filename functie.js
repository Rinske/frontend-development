var fieldset = document.querySelector("#project");     // dit zoekt een id genaamd "project" in de html, en dat noemene we fieldset.
var form1 = document.getElementById("form1");        // dit zoekt een id genaamd "form1" in de html, en dat noemen we form1

var fieldset2 = document.querySelector("#stage");
var form2 = document.getElementById("form2");


form1.onclick=function(){                            // Wanneer je op form 1 klikt:
        fieldset.classList.add("changeClass");        // Voegt een class vanuit je CSS toe genaamd "changeClass" * Zie style.css *
        fieldset2.classList.remove("changeClass");  // Verwijdert een class vanuit fieldset2, dit zorgt er voor dat als hij actief was, hij nu niet meer actief is.
}

form2.onclick=function(){                            // Dit is hetzelfde verhaaltje als hier boven maar dan voor "stage"
        fieldset2.classList.add("changeClass");
        fieldset.classList.remove("changeClass");

}

