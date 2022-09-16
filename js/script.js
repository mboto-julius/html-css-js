// grab all the panel
const panels = document.querySelectorAll('.panel');

// when printing out the panels, you get nodelist(which is like an array BUT IS NOT 
// ARRAY)
// console.log(panels);
// so grap a specific panel
// console.log(panels[0]);

// you can loop through the panel using forEach
// panels.forEach((panel) => {
//     console.log(panel)
// })

// adding event  (onclick first remove the class of active && add the class of active)
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
});

function removeActiveClasses(){
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
}