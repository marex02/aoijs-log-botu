module.exports = {
name:"ban",
code:`
$author[$userTag[$mentioned[1]] Adlı Kullanıcı Yasaklandı]

$description[
Yasakla Komutunu Kullanan Yetkili: <@$authorID>,

Yasakla Komutu Uygulanan Kullanıcı: $userTag[$mentioned[1]],

Kullanıcının Yasaklanma Sebebi: $noMentionMessage]

$ban[$mentioned[1];$noMentionMessage;1]
$onlyIf[$rolePosition[$highestRole[$clientID]]<=$rolePosition[$highestRole[$mentioned[1]]];Yasaklamak İstediğin Kullanıcının Rolü Benden Üstte]

$onlyIf[$rolePosition[$highestRole[$authorID]]<=$rolePosition[$highestRole[$mentioned[1]]];Yasaklamak İstediğin Kullanıcı Senin Rolünden Yüksek!]

$onlyBotPerms[ban;Bu Komutu Uygulamam İçin \`Üyeleri Yasakla\` İzinim Bulunmalı!]



$onlyIf[$mentioned[1]!=;Banlamamı İstediğin Kullanıcıyı Etiketle!]

$onlyPerms[ban;Bu Komutu Kullanabilmen İçin \`Üyeleri Yasakla\` İzinin Bulunmalı!]

$color[RED]
`
}
