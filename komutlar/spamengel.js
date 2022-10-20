module.exports = {
        name: "spam-engel",
        code: `
        $if[$message[1]==aç]
$description[:heavy_check_mark: Spam engel sistemini açtım. $getServerVar[spamsayı] adet spam yaptıktan sonra kullanıcıyı uyaracam.]
$color[RANDOM]
$setServerVar[spam;açık]
$onlyIf[$getServerVar[spam]!=açık;✘ Sistem zaten açık.]
$endif
$if[$message[1]==kapat]
$description[:heavy_check_mark: Spam engel sistemini kapattım.]
$color[RANDOM]
$setServerVar[spam;kapalı]
$onlyIf[$getServerVar[spam]!=kapalı;✘ Sistem zaten kapalı.]
$endif
$if[$message[1]==sayı]
$description[:heavy_check_mark: $message[2] adet spam yaptıktan sonra kullanıcıyı uyaracam.]
$color[RANDOM]
$setServerVar[spam;$message[2]]
$onlyIf[$isNumber[$message[2]]!=false;:x: Lütfen gerçek bir sayı girin _\`$message[2]\`_ gerçek bir sayı değil çünkü.]
$onlyIf[$message[2]!=;:x: Lütfen bir sayı girin.]
$onlyIf[$getServerVar[spam]!=kapalı;:x: Sistem kapalı lütfen sistemi aç ve sonra bu komutu tekrar kullan.]
$endif
$onlyIf[$hasPerms[$authorID;admin]!=false;✘ Bunun için _\`YÖNETİCİ\`_ izninin olması lazım.]
        `
}
