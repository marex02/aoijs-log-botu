module.exports = {
        name: "hgbb",
        code: `$if[$message[1]==aç]
$description[ HGBB sistemi açıldı.]
$color[RANDOM]
$setServerVar[hgbb;$mentionedChannels[1]]
$onlyIf[$mentionedChannels[1]!=;Bir Kanal Etiketle.]
$endif
$if[$message[1]==kapat]
$description[hgbb sistemini sıfırlandı.]
$color[RANDOM]
$setServerVar[hgbb;]
$endif
$onlyIf[$hasPerms[$authorID;admin]!=false; Bunun için _\`YÖNETİCİ\`_ izninin olması lazım.]
        `
}
