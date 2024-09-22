// Include the html5-qrcode library from CDN
<script src="https://unpkg.com/html5-qrcode/minified/html5-qrcode.min.js"></script>

<script>
    // Function that handles successful QR code scanning
    function onScanSuccess(decodedText, decodedResult) {
        // Display the scanned result on the webpage
        document.getElementById('qr-reader-results').innerHTML = `
            <h2>Scanned Result:</h2>
            <p>${decodedText}</p>`;
    }

    // Function that handles scan failures (when no QR code is found)
    function onScanFailure(error) {
        console.warn(`Code scan error = ${error}`);
    }

    // Create an instance of Html5QrcodeScanner and specify the element to attach to
    let html5QrcodeScanner = new Html5QrcodeScanner(
        "qr-reader", { fps: 10, qrbox: 250 });
    
    // Render the scanner with success and failure callbacks
    html5QrcodeScanner.render(onScanSuccess, onScanFailure);
</script>
