// Jacks Solution via PseudoCode
function filterByRadius() {
    // I have only edited the function name so far...
    var selectRadius = document.querySelector("select-radius"); // & variable names here
    const selectedRadius = selectRadius.value; // & variable names here
    const filteredGlossary = glossaryItem.filter(glossary);
    if (selectedRadius === glossaryItem.class) {
        // & variable name selectedRadius here
        return true;
    } else {
        return false;
    }
    outputItems(filteredGlossary);
    console.log(filteredGlossary);
}

export default filterByRadius; // & exported it
