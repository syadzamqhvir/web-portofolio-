// script.js
document.getElementById('download').addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.html(document.getElementById('content'), {
        callback: function (doc) {
            doc.save('portfolio.pdf');
        },
        x: 10,
        y: 10,
        width: 180, // target width in the PDF document
        windowWidth: 800 // base width of your HTML content
    });
});
