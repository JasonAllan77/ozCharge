// Jacks Solution via PseudoCode
function filterByType() { // I have only edited the function name so far...
    var selectType = document.querySelector("select-type"); // & variable names here
    const selectedType = selectType.value; // & variable names here
    const filteredGlossary = glossaryItem.filter(glossary);
    if (selectedType === glossaryItem.class) { // & variable name selectedType here
        return true;
    } else {
        return false;
    }
    outputItems(filteredGlossary);
    console.log(filteredGlossary);
}

export default filterByType; // & exported it