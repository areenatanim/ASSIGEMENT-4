// showOnly function for toggle


function showOnly(id) {
        const interview = document.getElementById("interview");
        const reject = document.getElementById("reject");
        const cardSection = document.getElementById("card-section");

        interview.classList.add("hidden");
        reject.classList.add("hidden");
        cardSection.classList.add("hidden")


        const selected = document.getElementById(id);
        selected.classList.remove("hidden");



}