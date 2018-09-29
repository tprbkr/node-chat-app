var socket = io();

  		socket.on('connect', function() {
  			console.log('connected to server');

  			// socket.emit('createEmail', {
  			// 	to: 'rvi@eg.com',
  			// 	text: 'how r u?'
  			// })

  			socket.emit('createMessage', {
  				to: 'Naga babu',
  				text: 'Lunch?'
  			})
  		});

  		socket.on('disconnect', function() {
  			console.log('Disconnected from server');
  		});

  		// socket.on('newEmail', function(email) {
  		// 	console.log('NewEmail', email);
  		// });

  		socket.on('newMessage', function(message) {
  			console.log('NewMessage', message);
  		});