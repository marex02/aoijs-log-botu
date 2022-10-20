module.exports = {
  name:"link-engel",
  code:`
  $if[$message[1]==aç]
  $channelSendMessage[$channelID;{color:$getServerVar[renk]}{description:$getServerVar[night_tick] | Link-Engel Sistemini Açtım{footer:$getServerVar[footer]}{thumbnail:$userAvatar}]
  $setServerVar[link;açık]
  $setServerVar[linkayarlayan;$authorID]
  $endif
  $if[$message[1]==kapat]
  $channelSendMessage[$channelID;{color:$getServerVar[renk]}{description:$getServerVar[night_tick] | Başarıyla Link-Engel Sistemini Kapattım}{footer:$getServerVar[footer]}{thumbnail:$userAvatar}]
  $setServerVar[link;kapalı]
  $endif
  $onlyPerms[admin;$getServerVar[admin]]
  $onlyIf[$checkContains[$tolowerCase[$message[1]];aç;kapat]==true;{color:$getServerVar[renk]}{footer:$getServerVar[footer]}{description:$getServerVar[Nightcode] | Lütfen Bir Argüman Kullan : \`\aç,kapat\`\}{thumbnail:$userAvatar}]
  `} 
