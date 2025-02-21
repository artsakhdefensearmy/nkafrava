

// Function to load and interpret .bz files
function loadBZFile(fileUrl) {
    // Create a new XMLHttpRequest to fetch the .bz file
    const xhr = new XMLHttpRequest();
    xhr.open("GET", fileUrl, true);
    xhr.responseType = "text"; // Expecting text response for .bz files

    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log("Successfully loaded .bz file.");
            interpretBZ(xhr.response);
        } else {
            console.error("Failed to load .bz file:", xhr.status);
        }
    };

    xhr.onerror = function() {
        console.error("Error fetching .bz file.");
    };

    xhr.send();
}

// Function to interpret the content of the .bz file
function interpretBZ(content) {
    // Hypothetical parsing logic for .bz files
    const parsedData = content.split('\n').map(line => {
      
