console.log("hi kiiii");

// function countUpdate() {
//         let total = container.children.length;
//         let selected = 0;
//         checkboxes.forEach(cb => {
//                 if (cb.checked) selected++;
//         });
//         document.getElementById('count').innerHTML =
//                 `মোট: ${total}টি | নির্বাচিত: ${selected}টি`;
// }

// function for the delate button

function delate(id) {
        const remove = document.getElementById(id);
        remove.parentNode.remove(remove);
}