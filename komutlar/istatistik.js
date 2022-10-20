module.exports = ({
name: "istatistik",
code:` 
$title[Benim Bilgilerim]
$author[$username[$clientid];$useravatar[$clientid]]
$thumbnail[$userAvatar[$clientid]]
$addField[Linklerim;
• **Davet Linkim:** **[TIKLA](https://discord.com/oauth2/authorize?client_id=$clientid&scope=bot&permissions=8)** 
• **Destek Sunucum:** **[TIKLA](DESTEK SW LİNK)**]
$addField[Diğer;
• **Gecikmem:** \`\`$botPing ms\`\`
• **Uptime:** \`\`$replaceText[$replaceText[$replaceText[$uptime;s; Saniye;-1];h; Saat;-1];m; Dakika;-1]\`\`
• **Geliştiricim:** \`\`$username[$botOwnerID]\`\` | <@$botOwnerID>
]
$addField[Sürümler;
• **NodeJS Sürümü:** \`\`$getObjectProperty[nodev]\`\`
• **Aoi.js Sürümü:** \`\`v$packageVersion\`\`
]
$addField[Ana Değerler;
• **Toplam Komutlar:** \`\`$commandsCount\`\`
• **Toplam Sunucu:** \`\`$serverCount\`\`
• **Toplam Kullanıcı:** \`\`$allMembersCount\`\`
• **Toplam Yazı Kanalı Sayım:** \`\`$allChannelsCount[text]\`\`
• **Toplam Ses Kanalı Sayım:** \`\`$allChannelsCount[voice]\`\`
• **Toplam Kategori Sayım:** \`\`$allChannelsCount[category]\`\`
]
$color[BLACK]
$footer[$username]
$addTimestamp

$djseval[d.object.nodev = process.version
$createObject[{}]]

`
})
