document.getElementById('myform').onsubmit = function() {  //Adds ".onsubmit" listener to form named 'myform', 
    console.log(document.getElementById('bookname').value); //example of getting a value of an input field.
    return false; //prevents sending form elsewhere. 
};


/////////////////// Another example ///////////////////

function submitForm(form) { //form is just the accepted argument sent from the form.
  alert(form.searchTerm.value)
  return false; //prevents sending form elsewhere. 
}
<form onsubmit="submitForm(this)"> //sends the function the current form "(this)" on button submit.
  <input name="searchTerm"/>
  <button>Submit</button>
</form>

///  https://stackoverflow.com/questions/37487826/send-form-data-to-javascript-on-submit
