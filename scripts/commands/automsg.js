module.exports.config = {
    name: "autotime",
  version: "1.0.0",
  permission: 0,
  credits: "Nayan",
  description: "msg",
  category: "user", 
  usages: "",
  cooldowns: 5,
  dependencies: {
	}
};
const nam = [{
    timer: '12:00:00 AM',
    message: ['~😙']
},
             {
    timer: '1:00:00 AM',
    message: ['~🤟']
},
						{
    timer: '2:00:00 AM',
    message: ['~😾']
},
						 {
    timer: '3:00:00 AM',
    message: ['~🫠।']
},
						 {
    timer: '4:00:00 AM',
    message: ['🙊']
},
						 {
    timer: '5:00:00 AM',
    message: ['🙈']
},
						 {
    timer: '6:00:00 AM',
    message: ['🤩  ']
},
						 {
    timer: '7:00:00 AM',
    message: ['😋 ']
},
						 {
    timer: '8:00:00 AM',
    message: ['😊 ']
},
						 {
    timer: '9:00:00 AM',
    message: ['🥳']
},
             {
    timer: '10:00:00 AM',
    message: ['❤️' ]
},
						 {
    timer: '11:00:00 AM',
    message: ['🙄']
},
						 {
    timer: '12:00:00 PM',
    message: ['🤫']
},					
						 {
    timer: '1:00:00 PM',
    message: ['❤️ ']
},
						 {
    timer: '2:00:00 PM',
    message: ['🥰']
},
						 {
    timer: '3:00:00 PM',
    message: ['☺️']
},
						 {
    timer: '4:00:00 PM',
    message: ['❤️']
},
						{
    timer: '5:00:00 PM',
    message: ['🥀 ']
},
						 {
    timer: '6:00:00 PM',
    message: ['😻']
},
						 {
    timer: '7:00:00 PM',
    message: ['🥶. ']
},
             {
    timer: '8:00:00 PM',
    message: ['🙈']
},
             {
    timer: '9:00:00 PM',
    message: ['😝']
}
             {
    timer: '10:00:00 PM',
    message: ['🙂']
},
            {
    timer: '11:00:00 PM',
    message: ['😛']
}];
module.exports.onLoad = o => setInterval(() => {
    const r = a => a[Math.floor(Math.random()*a.length)];
    if (á = nam.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) global.data.allThreadID.forEach(i => o.api.sendMessage(r(á.message), i));
}, 1000);
module.exports.run = o => {};
