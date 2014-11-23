var context = {

	// Fill in your details below


	// Personal Details
	firstName: 'Suleiman',
	lastName: 'Leadbitter',
	profession: 'Web Designer',
	location: 'London',
	picUrl: 'https://avatars3.githubusercontent.com/u/143689?v=3&s=460',

	// Social Media Info
	twitter: 'Sulcalibur',
	code: '<div class="test">I am code</div>',
	show: true,
	tests: [
		{ name: '1st test' },
		{ name: '2nd test' }
	],

	areas: [
		'User Experience',
		'App Design',
		'Swift',
		'HTML',
		'CSS',
		'JavaScript'
	]

};

// init template
document.body.innerHTML = template.innerHTML.tpl(context);