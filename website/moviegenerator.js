var movies = [
	'Alien',
	'Pulp Fiction',
	'Die Hard',
	'Twilight',
	'Shawshank Redemption',
	'Harold and Kumar Go to White Castle',
	'Bill and Ted\'s Excellent Advenutre',
	'Liar Liar',
	'The Truman Show',
	'The Godfather',
	'Predator',
	'The Excorcist',
	'Full Metal Jacket',
	'The Pianist',
	'Titanic',
	'2 Fast 2 Furious',
	'3:10 to Yuma',
	'48 Hrs.',
	'A Beautiful Mind',
	'A Bridge Too Far',
	'A Fish Called Wanda',
	'A Quiet Place',
	'Action Jackson',
	'After Hours',
	'Air Force One',
	'All Is Lost',
	'All the Money in the World',
	'Amelie',
	'American Beauty',
	'American Hustle',
	'Annihilation',
	'Ant-Man and Wasp',
	'Apocalypto',
	'Army of Darkness',
	'Bad Boys',
	'Beerfest',
	'Blade',
	'Blues Brothers',
	'Bridge Over the River Kwai',
	'Buckaroo Banzai',
	'Bullet in the Head',
	'Bullitt',
	'Butch Cassidy and the Sundance Kid',
	'Caddyshack',
	'Call Me By Your Name',
	'Captain Phillips',
	'Casino',
	'Casino Royale',
	'Children of Men',
	'Chungking Express',
	'Clear and Present Danger',
	'Cool Hand Luke',
	'Creed',
	'Crocodile Dundee',
	'Crouching Tiger, Hidden Dragon',
	'Dallas Buyers Club',
	'Dances With Wolves',
	'Darkest Hour',
	'Demolition Man',
	'Devil\'s Advocate',
	'Die Hard 3',
	'Dirty Dancing',
	'Do the Right Thing',
	'Dr. Strangelove',
	'Dunkirk',
	'Eighth Grade',
	'Encino Man',
	'Evil Dead',
	'Face/Off',
	'Fargo',
	'Fast and the Furious: Tokyo Drift',
	'Fast Times at Ridgemont High',
	'Field of Dreams',
	'Platoon',
	'Point Break',
	'Purple Rain',
	'Raging Bull',
	'Rain Man',
	'Raising Arizona',
	'Ralph Breaks the Internet',
	'Rambo: First Blood Part II',
	'Rocky', 
	'Saturday Night Fever',
	'Scanners',
	'Shaft',
	'Shaolin and the Wu Tang',
	'Solo: A Star Wars Story',
	'Space Jam',
	'Speed',
	'Stand By Me',
	'Street Fighter',
	'Super Fly',
	'Superman',
	'The Fighter',
	'The Life Aquatic',
	'The Lobster',
	'The Magnificent Seven',
	'The Naked Gun',
	'The Post',
	'The Rock',
	'The Transporter',
	'Unbreakable',
	'Vice',
	'Wall Street',
	'Wedding Crashers',
	'White Men Can\'t Jump',
	'Wu-Tang Swordsman',
]

function newMovie(){
	var randomNumber = Math.floor(Math.random() * (movies.length));
	document.getElementById('movieDisplay').innerHTML = movies[randomNumber];
}
