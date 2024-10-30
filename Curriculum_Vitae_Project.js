

/*  On page load, scan all pages for manage overrun */
document.addEventListener("DOMContentLoaded", function() {
    const countLoopError = 0;
    const sheets = document.querySelectorAll('.sheet');
    sheets.forEach(sheet => {
        manageOverrun(sheet)
    });
});
/** 
 * Check that no text is overflowing at the bottom of the page. If so, move the excess content to a new page. 
 * @param {HTMLElement} sheet - the sheet to check.
*/
    function manageOverrun(sheet) {
    const newSheet = document.createElement('section');
    newSheet.classList.add('sheet', 'padding');
    while (sheet.scrollHeight > sheet.clientHeight) {
        newSheet.insertBefore(sheet.lastElementChild, newSheet.firstChild);
        sheet.parentNode.insertBefore(newSheet, sheet.nextSibling);
    }
    if (newSheet.scrollHeight > newSheet.clientHeight && countLoopError < 50) {
        manageOverrun(newSheet);
        countLoopError++;
        const countLoopError = 0;
    }
}
