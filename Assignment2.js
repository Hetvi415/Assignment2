const os = require("os");
console.log("-----Operating System's Information-----");
console.log("Platform:      "+ os.platform());
console.log("Architechture: "+ os.arch());
console.log("Total Memory:  "+ os.totalmem() / (1024*1024*1024) + "GB");
console.log("Free Memory:   "+ os.freemem() / (1024*1024*1024) + "GB");
console.log("Current User:  "+ os.userInfo());
