function showQuote() {
  let quotes = [
    "Download the numbers or copy them to clipboard",
    "Separate numbers by space, comma, new line or no-space.",
    "Generate numbers sorted in ascending order or unsorted.",
    "Select odd only, even only, half odd and half even or custom number of odd/even.",
  ];
  // create a random number between 0 and 3
  let rand = Math.floor(Math.random() * quotes.length);
  document.getElementsByTagName("p")[0].innerHTML = quotes[rand];
}
