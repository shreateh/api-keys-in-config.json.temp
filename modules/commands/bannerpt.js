module.exports.config = {
	name: "bannerpt",
	version: "1.0.2",
	hasPermssion: 2,
	credits: "Raiku",
	description: "ID nhân vật | Tên | Chữ Ký | Facebook",
	commandCategory: "tạo ảnh",
	usages: "",
    cooldowns: 5
};
module.exports.run = async ({ api, event,args }) =>  {
  const text1 = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[0] || "21";
  const text2 = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[1] || "";
  const text3 = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[2] || "";
  const text4 = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[3] || "";
    const { loadImage, createCanvas } = require("canvas");
    const fs = require('fs')
    const request = require('request');
    const path = require('path');
    const axios = require('axios');
    const lengthchar = (await axios.get('https://run.mocky.io/v3/0dcc2ccb-b5bd-45e7-ab57-5dbf9db17864')).data
    const Canvas = require('canvas');
    let pathImg = __dirname + `/tad/avatar_1.png`;
    let pathAva = __dirname + `/tad/avatar_2.png`;
    let avtAnime = (
      await axios.get(encodeURI(`${lengthchar[text1 - 1].imgAnime}`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathAva, Buffer.from(avtAnime, "utf-8"));
    let background = (await axios.get(encodeURI(`https://imgur.com/Ch778s2.png`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathImg, Buffer.from(background, "utf-8"));
     if (!fs.existsSync(__dirname +
      `/tad/PastiOblique-7B0wK.otf`)) {
      let getfon2t = (await axios.get(`https://drive.google.com/u/0/uc?id=1zL4S8bRWrBZPwARodtoHfGZnWbZTyUX4&export=download`, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(__dirname + `/tad/PastiOblique-7B0wK.otf`, Buffer.from(getfon2t, "utf-8"));
    };
         if (!fs.existsSync(__dirname +
      `/tad/gantellinesignature-bw11b.ttf`)) {
      let getfon3t = (await axios.get(`https://drive.google.com/u/0/uc?id=1CldBtlxlO_Xm_6jbvj_TTEhOBCwTD7Hm&export=download`, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(__dirname + `/tad/gantellinesignature-bw11b.ttf`, Buffer.from(getfon3t, "utf-8"));
    };
     let a = await loadImage(pathImg);
    let ab = await loadImage(pathAva);
    let canvas = createCanvas(a.width, a.height);
    let ctx = canvas.getContext("2d");
     ctx.fillStyle = "#e6b030";
    ctx.drawImage(a, 0, 0, canvas.width, canvas.height);
     ctx.drawImage(ab, 1500, -400, 1980, 1980);
     ctx.textAlign = "start";
  Canvas.registerFont(__dirname + `/tad/PastiOblique-7B0wK.otf`, {
    family: "PastiOblique-7B0wK"
  });
    ctx.fillStyle = "#33f5f2"
    ctx.font = "370px PastiOblique-7B0wK";
    ctx.fillText(text2, 500, 750);
    ctx.textAlign = "start";
  Canvas.registerFont(__dirname + `/tad/gantellinesignature-bw11b.ttf`, {
    family: "gantellinesignature-bw11b"
  });
    ctx.fillStyle = "#fff"
    ctx.font = "185px gantellinesignature-bw11b";
    ctx.fillText(text3, 500, 680);
    ctx.save();
    ctx.textAlign = "end";
    ctx.fillStyle = "#f56236"
    ctx.font = "50px PastiOblique-7B0wK";
    ctx.fillText(text4, 2000, 850);
    ctx.textAlign = "start";

    ctx.beginPath();
    const imageBuffer = canvas.toBuffer();
     fs.writeFileSync(pathImg, imageBuffer);
  return api.sendMessage({
    body: `Ảnh Của Bạn Đây`,
    attachment: fs.createReadStream(pathImg)
  },
    event.threadID,
    () => fs.unlinkSync(pathImg),
    fs.unlinkSync(pathAva),
    event.messageID
  );
 }