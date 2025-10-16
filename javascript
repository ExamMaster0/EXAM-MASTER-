// Temporary fix - Hardcoded your PDFs
function loadRealPDFs() {
    const yourPDFs = [
        {
            id: 1,
            title: "History Guide",
            description: "Complete history guide for competitive exams",
            price: 39,
            file_url: "https://bkexliskprtpaikwlkzy.supabase.co/storage/v1/object/public/the%20king's%20speech/%20history.pdf"
        },
        {
            id: 2, 
            title: "Computer Science",
            description: "Complete computer science fundamentals guide",
            price: 39,
            file_url: "https://bkexliskprtpaikwlkzy.supabase.co/storage/v1/object/public/the%20king's%20speech/Computer%201.pdf"
        },
        {
            id: 3,
            title: "Political Science",
            description: "Comprehensive political science and constitution guide", 
            price: 39,
            file_url: "https://bkexliskprtpaikwlkzy.supabase.co/storage/v1/object/public/the%20king's%20speech/Political%201%20(1).pdf"
        }
    ];
    
    const pdfGrid = document.getElementById('pdfGrid');
    pdfGrid.innerHTML = '';
    
    yourPDFs.forEach(pdf => {
        const pdfCard = `
            <div class="pdf-card">
                <div class="pdf-icon">📘</div>
                <h3>${pdf.title}</h3>
                <p>${pdf.description}</p>
                <div class="price">₹${pdf.price}</div>
                <button class="buy-btn" onclick="buyRealPDF(${pdf.id}, '${pdf.title}', ${pdf.price})">
                    Buy Now
                </button>
            </div>
        `;
        pdfGrid.innerHTML += pdfCard;
    });
}
