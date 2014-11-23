var context = {


	firstName: 'Jameella',
	lastName: 'Jaali',
	profession: 'Doula',
	location: 'North London',
	picUrl: 'http://img4.wikia.nocookie.net/__cb20120922235441/monster/images/f/f4/CookieMonster-Sitting.jpg',
	twitter: 'JamJarL',
	show: true,
	tests: [
		{ name: '1st test' },
		{ name: '2nd test' }
	],

	areas: [
		'Birth Partner',
		'Emotional Support',
		'Samurai',
		'Makes Awesome Scones',
		'Kick Arse Wife',
		'Mega Mother'
	]
};

// init template
document.body.innerHTML = template.innerHTML.tpl(context);