// JavaScript Document


function copy_to_clipboard(field) {
  /* Get the text field */
  var copyText = field

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");
	
	
}
