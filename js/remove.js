


// // remove all the selected items
// function delateAll() {
//         const remove = document.getElementsByClassName("item");
//         while (remove.length > 0) {
//                 remove[0].parentNode.removeChild(remove[0]);
//         }
// }



function removeCard(jobId) {
        const card = document.getElementById(`card-${jobId}`) ||
                document.querySelector(`[onclick*="card-${jobId}"]`)?.closest('[id^="card-"]');

        if (card) {
                card.style.transition = 'opacity 0.3s ease';
                card.style.opacity = '0';
                setTimeout(() => {
                        card.remove();
                        updateCounters(); // Update counts after removal
                }, 300);
        }
}




// Export global function
window.removeCard = removeCard;