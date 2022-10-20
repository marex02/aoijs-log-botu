module.exports = {
name:"sayaç",
code:`
$if[$message[1]==aç]
$color[RANDOM]
$description[Sayaç Açıldı. Hedef $message[2] log ise <#$mentionedChannels[1]> olarak ayarlandı.]
$setServerVar[sayaç;$message[2]]
$setServerVar[sayaçlog;$mentionedChannels[1]]
$onlyIf[$isNumber[$message[2]]==true;Bir hedef belirle ve bu hedefin sayı olduğuna emin ol.]
$onlyIf[$mentionedChannels[1]!=;Bir kanal etiketle ve hedef belirt.]
$endif
$if[$message[1]==kapat]
$color[RANDOM]
$description[Sayaç Kapatıldı.]
$setServerVar[sayaç;0]
$setServerVar[sayaçlog;]
$endif
$onlyIf[$checkContains[$toLowercase[$message[1]];aç;kapat]==true;:Lütfen \`aç\` veya \`kapat\` seçeneklerini kullanın.]
$onlyPerms[admin;Bu komutu sadece **YÖNETİCİ** yetkisi olanlar kullanabilir.]
`
}  
 
