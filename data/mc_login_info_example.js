module.exports = {
	yourusername01:{
		"host":"127.0.0.1",
		"auth":"microsoft",
		"username":"your@emailaddress.com",
		"password":"12345",
		"port":"25566",
		"keepAlive":true,
		"version":false,
		"verbose":true
	},
	yourusername02:{
		"host":"www.a_minecraftserver_address.com",
		"username":`your@emailaddress.com`, 
		"password":"12345",
		"port":"25566",
		"auth":"microsoft",
		"version":false,
		"verbose":true
		},
		yourusername03:{
			"host":"www.a_minecraftserver_address.com",
			"username":`your@emailaddress.com`, 
			"password":"12345",
			"port":"25566",
			"auth":"microsoft",
			"version":false,
			"verbose":true
			},
		offline: {
			"host": "localhost",
			"username": "Bot_Mineflayer",
			"port":"25565",
			},
	masters: ['your in game username 001', 'your in game username 002']
}

// snowcatman.hopto.org:25566
// const connect = require('./data/mc_login_info.js'); /* points to mc - mf bot info login data info */
// const OPTIONS = (connect.TimLittleNum1)


/*  
module.exports = {
	AnyExampleOnllineName:{
		"host":"localhost",
		"username":"email@address.com",
		"password":"password",
		"port":"25565",
		"version":"1.16.4,
		}
	AnyExampleOnllineName:{
		"host":"localhost",
		"username":"AnyName",
		"port":"25565",
		}
	masters:{
		Your_UserName, 
		Someone_You_Trust_Username_1, 
		Someone_You_Trust_Username_2, 
		etc
	}
}
*/

/* The example of use: (bot.connect.lan)  ===> so I can connect to other servers 
the lazy way and let the bot know who there master is.. */
/* The example of use: (bot.connect.masters)  ===> so I can connect to other 
servers the lazy way and let the bot know who there master is.. */
