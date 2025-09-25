const toggleCitationsCheckbox = document.getElementById("toggle-citations");
const cites = document.getElementsByTagName('cite');

toggleCitationsCheckbox.checked = true;

for (const cite of cites) {
    cite.style.display = "initial"
}

toggleCitationsCheckbox.addEventListener('change', function() {

    if (toggleCitationsCheckbox.checked) {
        for (const cite of cites) {
            cite.style.display = "initial";
        }
    } else {
        for (const cite of cites) {
            cite.style.display = "none";
        }
    }
})