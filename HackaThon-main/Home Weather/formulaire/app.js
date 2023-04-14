    JotForm.newDefaultTheme = true;
	JotForm.extendsNewTheme = false;
	JotForm.singleProduct = false;
	JotForm.newPaymentUIForNewCreatedForms = false;
	JotForm.newPaymentUI = true;

	JotForm.init(function(){
	/*INIT-START*/
      setTimeout(function() {
          $('input_11').hint('ex: myname@example.com');
       }, 20);
if (window.JotForm && JotForm.accessible) $('input_6').setAttribute('tabindex',0);
	/*INIT-END*/
	});

   JotForm.prepareCalculationsOnTheFly([null,null,null,null,null,null,{"name":"requestingInformation","qid":"6","text":"Requesting Information Regarding:","type":"control_textarea"},{"name":"7","qid":"7","text":"Submit Form","type":"control_button"},null,null,{"name":"name","qid":"10","text":"Name","type":"control_fullname"},{"name":"email11","qid":"11","subLabel":"example@example.com","text":"E-mail","type":"control_email"},{"name":"phoneNumber12","qid":"12","text":"Phone Number","type":"control_phone"},{"name":"clickTo","qid":"13","text":"Information Request","type":"control_head"}]);
   setTimeout(function() {
JotForm.paymentExtrasOnTheFly([null,null,null,null,null,null,{"name":"requestingInformation","qid":"6","text":"Requesting Information Regarding:","type":"control_textarea"},{"name":"7","qid":"7","text":"Submit Form","type":"control_button"},null,null,{"name":"name","qid":"10","text":"Name","type":"control_fullname"},{"name":"email11","qid":"11","subLabel":"example@example.com","text":"E-mail","type":"control_email"},{"name":"phoneNumber12","qid":"12","text":"Phone Number","type":"control_phone"},{"name":"clickTo","qid":"13","text":"Information Request","type":"control_head"}]);}, 20); 

 var all_spc = document.querySelectorAll("form[id='223453788025359'] .si" + "mple" + "_spc");
 for (var i = 0; i < all_spc.length; i++)
 {
   all_spc[i].value = "223453788025359-223453788025359";
 }
