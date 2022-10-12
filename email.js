function sendMail() {
	var params = {
		name: document.getElementById('fullname').value,
		emailid: document.getElementById('emailid').value,
		message: document.getElementById('message').value,
	};

	const serviceID = 'service_23nabcr';
	const templateID = 'template_7oo7bna';
	// const publicKey = 'CSmqlrpJBNmXALmUI';

	emailjs
		.send(serviceID, templateID, params)
		.then((res) => {
			document.getElementById('fullname').value = '';
			document.getElementById('emailid').value = '';
			document.getElementById('message').value = '';
			console.log(res);
			alert('your message sent successfully');
		})
		.catch((err) => console.log(err));
}
