module.exports = {
name:"uyar",
aliases: ['warn'],
code:`
$author[<@$mentioned[1]> IDli Kullanıcı Uyarıldı]
$description[**
Uyarılan Kullanıcı: <@$mentioned[1]>,
Uyaran Yetkili: <@$authorId>,
Uyarılma Sebebi: \`$noMentionMessage\`,
Uyarılan Kullanıcının Bulunan Toplam Uyarı Sayısı: \`$getServerVar[toplamwarn;$mentioned[1]]\`**]

$useChannel[$getServerVar[warnlog]]

$setServerVar[toplamwarn;$sum[$getServerVar[toplamwarn;$mentioned[1]];1];$mentioned[1]]

$onlyIf[$rolePosition[$highestRole[$clientID]]<=$rolePosition[$highestRole[$mentioned[1]]];**Uyarmak İstediğin Kullanıcının Rol Pozisyonu Benden Yüksek!**]

$onlyIf[$rolePosition[$highestRole[$authorID]]<=$rolePosition[$highestRole[$mentioned[1]]];**Uyarmak İstediğin Kullanıcı Rol Pozisyonu Olarak Senden Yüksek!**]

$onlyPerms[managemessages;**Bu Komutu Kullanabilmek İçin \`Mesajları Yönet\` İznin Bulunmalı!**]
$onlyBotPerms[managemessages;**Bu Komutu Uygulamam İçin \`Mesajları Yönet\` İzinim Bulunmalı!**]


$onlyIf[$getServerVar[warnlog]!=;**Uyarı Logu Ayarlanmamış Ayarlamak İçin \`$getServerVar[prefix]warn-log\` Yazınız**]
$color[RANDOM]
`
}  
