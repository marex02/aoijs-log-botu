module.exports = ({
    name: "nuke",
    code: `
$deleteChannels[$channelID]
$cloneChannel
$wait[7s]
$channelSendMessage[$channelID;{color:RANDOM}{description:Kanal \`7\` saniye içinde nukelenecek.}{image:https://thumbs.gfycat.com/OffbeatLeafyAustraliancurlew-size_restricted.gif}]
$onlyPerms[managemessages;Bu komutu sadece **MESAJLARI YÖNET** yetkisi olanlar kullanabilir.]
`
}) 
