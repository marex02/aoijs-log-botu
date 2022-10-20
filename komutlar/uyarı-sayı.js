module.exports = {
name:"uyarı-sayı",
aliases: ['warn-sayı'],
code:`
$title[**Bakalım Bakalım...**]
$description[**Araştırmalarıma Göre <@$mentioned[1]> Adlı Kullanıcının Toplam \`$getServerVar[toplamwarn;$mentioned[1]]\` Uyarısı Var**]
$color[RANDOM]
$onlyIf[$message!=;**Herhangi Bir Kullanıcıyı Etiketle**]
`
}  
