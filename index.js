function copyToClipboard() {
    var copyText = "cpa.dev.contact@gmail.com";
    navigator.clipboard.writeText(copyText);
    
    var popup = document.getElementById("myPopup");
    
    popup.innerHTML = "Copied to clipboard"
}

function outFunc() {
    var popup = document.getElementById("myPopup");
    popup.innerHTML = "Copy to clipboard";
}