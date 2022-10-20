module.exports = {
  name:"sunucu-info",
  code:`
  $color[RANDOM]
  $thumbnail[$serverIcon]
  $addTimestamp
  $footer[$userTag[$authorID] Tarafından Istendi]
  $description[
   
   ___***$serverName Sunucu Bilgileri***___


$addField[Sunucu Genel Bilgileri; 
Sunucun Kurulma Tarihi : $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$guildID;time];and;ve;-1];seconds;Saniye;-1];minutes;Dakika;-1];hours;Saat;-1];days;Gün;-1];months;Ay;-1];weeks;Hafta;-1];years;Yıl;-1]
Sunucu Boost Sayısı : $serverBoostCount
Sunucu Leveli : $serverBoostLevel
Sunucudaki Kullanıcı Sayısı : $membersCount
Sunucudaki Bot Sayısı : $botCount
 
 ;yes]
 
$addField[
Sunucu Kanal İstatistikleri;
 Toplam Kanal Sayısı : $channelCount
📜 Toplam Metin Kanalı Sayısı : $channelCount[text]
🗣 Toplam Ses Kanalı Sayısı : $channelCount[voice]
🎓 Toplam Katagori Sayısı : $channelCount[category]
;yes]


  
  ]
`
} 
