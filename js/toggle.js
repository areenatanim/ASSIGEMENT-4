// showOnly function for toggle


// function showOnly(id) {
//         const interview = document.getElementById("interview");
//         const reject = document.getElementById("reject");
//         const cardSection = document.getElementById("card-section");

//         interview.classList.add("hidden");
//         reject.classList.add("hidden");
//         cardSection.classList.add("hidden")


//         const selected = document.getElementById(id);
//         selected.classList.remove("hidden");



// }



function showOnly(sectionId) {
        // Hide all sections
        const sections = ['card-section', 'interview', 'reject'];
        sections.forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                        element.classList.add('hidden');
                }
        });

        // Show selected section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
                targetSection.classList.remove('hidden');
        }

        // Update button states
        document.querySelectorAll('[onclick^="showOnly"]').forEach(btn => {
                btn.classList.remove('btn-primary', 'btn-secondary', 'btn-accent');
                btn.classList.add('btn-outline');

                if (btn.getAttribute('onclick').includes(sectionId)) {
                        if (sectionId === 'card-section') {
                                btn.classList.add('hover:bg-blue-400');
                        } else if (sectionId === 'interview') {
                                btn.classList.add('hover:bg-green-600', 'btn-secondary');
                        } else if (sectionId === 'reject') {
                                btn.classList.add('hover:bg-red-500', 'btn-accent');
                        }
                }
        });
}
window.showOnly = showOnly;