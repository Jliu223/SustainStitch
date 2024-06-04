function parseCSV(data, delimiter = '|') {
  const rows = data.trim().split('\n');
  return rows.map(row => row.split(delimiter));
}

function searchBarcode(barcode) {
  const rows = parseCSV("fastFashionCompDim.csv");
  let result = "Barcode not found";

  for (let row of rows) {
      if (row[0] === barcode) {
          result = row[2];
          break;
      }
  }

  return result;
}

function handleButtonClick() {
  const barcodeInput = document.getElementById('barcodeInput').value;
  const result = searchBarcode(barcodeInput);
  document.getElementById('result').innerText = result;
}

// Attach event listener to the button after the DOM is loaded
document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('searchButton').addEventListener('click', handleButtonClick);
});

//Our scrum master Abhishek helped us a lot with this project. He helped us with the CSS and HTML. He also helped us with the javascript.

