import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `๐ค Ingresa el tรญtulo de una canciรณn\n\n๐ค Ejemplo ${usedPrefix + command} Lil Peep hate my life `
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw '๐ค Vรญdeo/Audio no encontrado'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  await conn.sendButton(m.chat, `
โญโโโโโโโโฐโฉโฑโโโโโโโโฎ
โฝ โฐโฐโฐ TURBO MรSICA โฑโฑโฑ
โฟโโโโโโโโโโโโโโโโโโโโโโโโโ
โ โฐโฐโฐโฐ RESULTADOS โฑโฑโฑโฑ
โโโโโโโโโโโโโโโโโโโโโโโโโโ
โโโโ ๐ฒ Mรบsica โโโ
โโโโโโโโโโโโโโ<
โ๐ฒ Tรญtulo : ${title}
โ๐ฒ Publicado: ${publishedTime}
โ๐ฒ Duraciรณn: ${durationH}
โ๐ฒ Vistas: ${viewH}
โโโโโโโโโโโโโโ
โ โฎโฎโฎโฎ CANAL OFC โฑโฑโฑโฑโฑโฑ
โApoya al Bot ๐๐ปYouTube
โSuscrรญbete y activa la ๐
โCon eso ya estas
โApoyando al Bot ๐ค โค๏ธ
โ๐ค https://youtube.com/c/TURBONTR1
โโโโโโโโโโโโโโโฎ
โฟ         โ  โ  โ  โ  โ    .โฟ
โฐโขโาอกอ โซ๐๐๐๐๐โ๐๐๐๐๐โซโาอกอโขโฏ
  `.trim(), igtb, thumbnail, tbyt, 'YouTube', null, null, [
    ['๐ถ MP3', `${usedPrefix}tbmp3 ${url} yes`],
    ['๐ฅ MP4', `${usedPrefix}tbmp4 ${url} yes`]
  ], m)
}
handler.help = ['play']
handler.tags = ['downloader']
handler.command = ['play', 'playvid', 'play2'] 

handler.exp = 0
handler.limit = false

export default handler

