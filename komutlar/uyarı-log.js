module.exports = {
name:"uyarı-log",
aliases: ['warn-log'],
code:`
$author[Başarılı!]
$title[Uyarı Logu Başarıyla Ayarlandı]
$description[**
Bilgiler:

Uyarı Log - <#$mentionedChannels[1]>
**]

$setServerVar[warnlog;$mentionedChannels[1]]

$onlyPerms[admin;**Bu Komutu Kullanabilmek İçin \`Yönetici\` İzinin Bulunmalı!**]

$onlyIf[$message!=;**Yanlış Kullanım Tespit Ettik Doğru Kullanım \`$getServerVar[prefix]warn-log #kanal\`**]
$onlyIf[$mentionedChannels[1]!=;**Logu Ayarlamak İçin Bir Kanal Etiketle**]

`
}  
