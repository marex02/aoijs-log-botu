const adabowale = require("aoi.js");
const bot = new adabowale.Bot({
  token: process.env.token,
  prefix: ".",
})
 bot.onMessage({guildOnly: false});
bot.command({
  name:"eval",
  code:`$eval[$message]
$onlyForIDs[$botOwnerID;]`
})
bot.command({
name: "ping",
code:`$ping`
})

const fs = require('fs')
var reader = fs.readdirSync("./komutlar").filter(file => file.endsWith(".js"))
for (const file of reader) {
  const command = require(`./komutlar/${file}`)
  bot.command({
    name: command.name,
    aliases: command.aliases,
    bkz: command.bkz,
    code: command.code
  });
}
bot.variables({
variable:"değer"
})
bot.status({
  text: "Maxi Code ❤️ Adabøwale",
  type: "PLAYING",
  status: "dnd",
  time: 12
})
bot.varaibles({
toplamwarn:"0",
warnlog:"" 
})
bot.command({
name:"$alwaysExecute",
code:`
$setServerVar[spamsayı;$sum[$getServerVar[spamsayı;$authorID];1];$authorID]
$onlyIf[$getServerVar[spamsayı;$authorID]<=5;{execute:spam}]
$onlyIf[$message==$getServerVar[spammessage;$authorID];]
$onlyIf[$getServerVar[spam]!=kapalı;]
`
})
bot.awaitedCommand({
name:"spam",
code:`
$setServerVar[spamsayı;0;$authorID]
Spam yapma ananı sikerim
`
})
bot.command({
name:"$alwaysExecute",
code:`
$setServerVar[spammessage;$message;$authorID]
$onlyIf[$getServerVar[spam]!=kapalı;]
`
})
bot.command({
name:"$alwaysExecute",
code:`
$setServerVar[spamsayı;$sum[$getServerVar[spamsayı;$authorID];1];$authorID]
$onlyIf[$getServerVar[spamsayı;$authorID]<=5;{execute:spam}]
$onlyIf[$message==$getServerVar[spammessage;$authorID];]
$onlyIf[$getServerVar[spam]!=kapalı;]
`
})
bot.awaitedCommand({
name:"spam",
code:`
$ban[$authorID;Maxi Code Spam engel
$setServerVar[spamsayı;0;$authorID]
Spam yaptın engelledim
`
}) 
bot.command({
  name:"snipe",
  code:`
  $author[Selamlar $username;$authorAvatar]
  $addField[__Mesaj Sahibi:__;**_\`\`\`js
  $userTag[$getServerVar[snipe1]] • $getServerVar[snipe1]\`\`\`_**]
  $addField[__Silinen Mesaj:__;**_\`\`\`js
  $getServerVar[snipe2]\`\`\`_**]
  $addField[__Silinen Mesajın Kanalı:__;**_\`\`\`js
  $channelName[$getServerVar[snipe3]]\`\`\`_**]
  $addField[__Silinme Tarihi:__;**_\`\`\`js
  $getServerVar[snipe4]\`\`\`_**]
  $color[c6ebff]
  $thumbnail[$userAvatar[$getServerVar[snipe1]]]
  $onlyIf[$getServerVar[snipe1]!=; Silinen bir mesaj yok]
  $onlyPerms[admin; Bunun için __YÖNETİCİ__ iznin olmalı!]
  `
  })

bot.deletedCommand({
  channel:"$channelID",
  code:`
  $setServerVar[snipe1;$authorID]
  $setServerVar[snipe2;$message]
  $setServerVar[snipe3;$channelID]
  $setServerVar[snipe4;$day $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$month;January;Ocak];February;Şubat];March;Mart];April;Nisan];May;Mayıs];June;Haziran];July;Temmuz];August;Ağustos];September;Eylül];October;Ekim];November;Kasım];December;Aralık] $year - $sum[3;$hour]:$minute]
  $onlyIf[$isBot[$authorID]==false;]
  `
  }) 
bot.variables({
  snipe1:"",
  snipe2:"",
  snipe3: "",
  snipe4: ""
}) 
bot.joinCommand({
channel: "$getServerVar[hgbb]",
code: `$attachment[https://ieleseno.sirv.com/anycard?text.0.text=$uri[encode;$usertag]&text.0.position.x=-50%25&text.0.position.y=-63%25&text.0.size=45&text.0.color=ffffff&text.0.font.family=Neucha&text.0.font.weight=600&text.1.text=Welcome&text.1.position.x=-50%25&text.1.position.y=-44%25&text.1.size=45&text.1.color=ffffff&text.1.font.family=Neucha&text.1.font.weight=600&text.2.text=Members%0A$membersCount&text.2.position.x=-50%25&text.2.size=45&text.2.color=ffffff&text.2.font.family=Neucha&text.2.font.weight=600;welcome.png]`
}) 
bot.leaveCommand({
channel: "$getServerVar[hgbb]",
code: `$attachment[https://ieleseno.sirv.com/anycard?text.0.text=$uri[encode;$usertag]&text.0.position.x=-50%25&text.0.position.y=-63%25&text.0.size=45&text.0.color=ffffff&text.0.font.family=Neucha&text.0.font.weight=600&text.1.text=Bay%20Bay&text.1.position.x=-50%25&text.1.position.y=-44%25&text.1.size=45&text.1.color=ffffff&text.1.font.family=Neucha&text.1.font.weight=600&text.2.text=Members%0A$membersCount&text.2.position.x=-50%25&text.2.size=45&text.2.color=ffffff&text.2.font.family=Neucha&text.2.font.weight=600;welcome.png]`
}) 
bot.variables({
hgbb:"",
  }) 
bot.joinCommand({
channel:"$getServerVar[sayaçlog]",
code:`$color[RANDOM]
$description[\`$userTag\` Sunucumuza Katıldı. \`$getServerVar[sayaç]\` Olmamıza \`$sub[$getServerVar[sayaç];$membersCount]\` Kişi Kaldı.]
$footer[Maxi Code;$authorAvatar]
`
})
bot.leaveCommand({
channel:"$getServerVar[sayaçlog]",
code:`$color[RANDOM]
$description[\`$userTag\` Sunucumuzdan Çıktı. \`$getServerVar[sayaç]\` Olmamıza \`$sub[$getServerVar[sayaç];$membersCount]\` Kişi Kaldı.]
$footer[Maxi Code;$authorAvatar]
`}) 
bot.variables({
  sayaç:"0",
  sayaçlog:""
}) 
bot.variables({
  küfür:"kapalı",
  küfürayarlayan:"",
  küfürs:"1",
  link:"kapalı",
  linkayarlayan:"",
  maxi_tic:"", /// tik emoji id
  maxi_carpi:"",//carpi emiji id 
  footer:"Maxi Code"
  })
bot.command({
  name:"$alwaysExecute",
  code:`
  $color[$getServerVar[renk]]
  $thumbnail[$userAvatar]
  $footer[$getServerVar[footer]]
  $description[
  $getServerVar[maxi_carpi] | <@$authorID> Küfür Etmek Kesinlikle Yasak
  ]
  $clear[1]
  $deleteIn[5s]
  $onlyIf[$hasAnyPerm[admin;manageserver]==false;]
  $onlyIf[$checkContains[$message;amk;aq;amq;am;amck;amcik;amcık;sik;skm;göt;oc;oç;orspu;orusbu;oruzbu;orospu;orzbu;yarrak;yarak;sikerim;wtf;fk;fck;fuck;stfu]==true;] 
  $onlyIf[$getServerVar[küfür]!=kapalı;]
  $addReactions[😳]
   `
})
bot.command({
  name:"$alwaysExecute",
  code:`
  $color[$getServerVar[renk]]
  $thumbnail[$userAvatar]
  $footer[$getServerVar[footer]]
  $description[
  $getServerVar[maxi_carpi] | <@$authorID> Link Atmak Kesinlikle Yasak
  ]
  $clear[1]
  $deleteIn[5s]
$onlyIf[$checkContains[$tolowerCase[$message];https://;discord.gg;.gg;.com;.co;.go;.lyx]==true;]
  $onlyIf[$getServerVar[link]!=kapalı;]
  $onlyIf[$hasAnyPerm[admin;manageserver]==false;]
  $addReactions[😳]
`
})  
