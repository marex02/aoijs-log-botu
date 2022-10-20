module.exports = ({
  name:'bansayı',
  code:`
$color[RANDOM]
$description[
Bu sunucuda toplam \`$banCount\` banlı üye var.

\`\`\`fix
$replaceText[$usersBanned;,;
;-1]\`\`\`

`
}) 
