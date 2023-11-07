document.getElementById('save').addEventListener('click', function() {
  var buttonColor = document.getElementById('buttonColor').value;
  var buttonTextColor = document.getElementById('buttonTextColor').value;
  browser.storage.local.set({
    buttonColor: buttonColor,
    buttonTextColor: buttonTextColor
  });
});
document.getElementById('reset').addEventListener('click', function() {
  document.getElementById('buttonColor').value = '#800080';
  document.getElementById('buttonTextColor').value = 'white';
  browser.storage.local.set({
    buttonColor: '#800080',
    buttonTextColor: 'white'
  });
});
browser.storage.local.get(['buttonColor', 'buttonTextColor']).then(function(result) {
  if (result.buttonColor) {
    document.getElementById('buttonColor').value = result.buttonColor;
  } else {
    document.getElementById('buttonColor').value = '#800080';
  }
  if (result.buttonTextColor) {
    document.getElementById('buttonTextColor').value = result.buttonTextColor;
  } else {
    document.getElementById('buttonTextColor').value = '#ffffff';
  }
});
