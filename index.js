const {Telegraf} = require('telegraf')
const token = "5292308365:AAGv23GwHwgmQtbMvXO2DnVjY4bKgWyy6eo"
const bot = new Telegraf(token) 
const youtube = require('scrape-youtube');
const translator = require('translation-google')
const youtubedl = require('@sidislive/youtube-dl-exec')
const fs = require('fs');
const Innertube = require('youtubei.js');
const wiki = require('wikipedia');
const gis = require('g-i-s');
 const path = require('path');
/*Basic Funcion*/

titles=' '
stream= ' '




/*BASIC COMMAND*/


bot.command('recover',  (ctx)=>{
    files= ctx.message.text 
    files=files.replace('/i', ' ')
  const directory = './';

fs.readdir(directory, async (err, files) => {
  if (err) throw err;

  for (let file of files) {
    if(file.endsWith('.mp3')){
    file=`${file}`
    console.log(file)
    await ctx.replyWithAudio({ source: file })}
       

  }
});
})


/*Start Command*/

bot.start(async(ctx)=>{
  ctx.reply(`Hello ${ctx.from.first_name}  ${ctx.from.last_name} use /help `)
  console.log(ctx.from)
  console.log(ctx.chat)
  console.log(ctx.message)




  
})

/*Help Command*/
bot.help((ctx)=>{
  message=`
  🔥 Hola ${ctx.from.first_name}  ${ctx.from.last_name} aca estan mis comandos 🔥

  

  /start    /help            
  /yt        — busca y devuelve una lista de videos
  /img       — envia foto dada
  /echo      — repite el texto dado 🤝
  /audio     — envia el audio de un video de youtube
  /wiki      — envia wikidata [en construccion]
  /transes   — traduce el español al ingles
  /transen   —  traduce el ingles al español
  
  
  `
  ctx.reply(message)
})
/*Settings Command*/
bot.settings((ctx)=>{
  ctx.reply('# Settings')
})
/*Custom Command*/
bot.command('wiki', async (ctx) => {
  text= ctx.message.text 
  text=text.replace('/wiki', ' ')
  text=text.replace(' ', '_')
async function wi(text){
	try {
    wiki.setLang('es')
		const summary = await wiki.summary(text);
    title=summary.title
    thumbnail=summary.thumbnail.source
    des=summary.description
    source=summary.extract
    too=`
${title}

${des}
${source}
`
		console.log(too);
    ctx.reply(too)
   ctx.replyWithPhoto(
    { url: thumbnail })
  
		//Response of type @wikiSummary - contains the intro and the main image
	} catch (error) {
		console.log(error);
		//=> Typeof wikiError
	}
}
wi(text);
 
//ctx.reply(text)
})

bot.command('img', async (ctx) => {
  text= ctx.message.text 
  text=text.replace('/img', ' ')
gis(text, logResults);

function logResults(error, results) {
  if (error) {
    console.log(error);
  }
  else {
    //results=JSON.stringify(results, null, '  ')
    console.log(results[1].url);
    i=Math.random()
    i=i * 200
    i=Math.ceil(i)
    console.log(i)
    e=20


try {
  xd=ctx.replyWithPhoto({url:results[i].url})
} catch (error) {
  i=i - 100
   xd=ctx.replyWithPhoto({url:results[i].url})
  // expected output: ReferenceError: nonExistentFunction is not defined
  // Note - error messages will vary depending on browser
}

    
    
    //console.log(results)
      
    
  }
}

})


bot.command("audio",async  (ctx) => {
    text= ctx.message.text 
  text=text.replace('/audio', ' ')
   const youtube = await new Innertube();
 name=text
   search = await youtube.search(name);

  bot.action('1', (ctx)=>{
  async function start(sea) {
 
 
  search = await youtube.search(name);
  let titles=`${search.videos[0].title}.mp3`
  const stream = youtube.download(search.videos[0].id, {
    format: 'mp4', // Optional, ignored when type is set to audio and defaults to mp4, and I recommend to leave it as it is
    
     // if a video doesn't have a specific quality it'll fall back to 360p, also ignored when type is set to audio
    type: 'audio' // can be “video”, “audio” and “videoandaudio”
  });
  x2x=
  de=await stream.pipe(fs.createWriteStream(`./${search.videos[0].title}.mp3`));
console.log()
 des=de.path;
titulo = des
  
  stream.on('start', () => {
    ctx.reply(`
🛠 Descargando Archivos de Audio 🛠

🎧${search.videos[0].title}🎧
`);
  });
  
  stream.on('info', (info) => {
    // { video_details: {..}, selected_format: {..}, formats: {..} }
    //ctx.reply(`[DOWNLOADER] Downloading ${info.video_details.title} by ${info.video_details.metadata.channel_name}`);
  });
  
  stream.on('progress', (info) => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`[DOWNLOADER] Downloaded ${info.percentage}% (${info.downloaded_size}MB) of ${info.size}MB`);
  });
  
  stream.on('end', () => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.info('[DOWNLOADER]', 'Done!');
    ctx.reply(`😱 Descarga Finalizada al 100% 😱

Enviando  el archivo ${search.videos[0].title}`)
    ctx.replyWithAudio({ source: titles })
    console.info('[DOWNLOADER]', 'Send video!');
    const path = require('path');

const directory = './';

fs.readdir(directory, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    if(file==titles){
    fs.unlink(path.join(directory, file), err => {
      if (err) throw err;
    });}
  }
});
  });
  
  stream.on('error', (err) => console.error('[ERROR]', err)); 
}start(text)
})
   bot.action('2', (ctx)=>{
  async function start(sea) {
 
 
  search = await youtube.search(name);
  let titles=`${search.videos[1].title}.mp3`
  const stream = youtube.download(search.videos[1].id, {
    format: 'mp4', // Optional, ignored when type is set to audio and defaults to mp4, and I recommend to leave it as it is
    
     // if a video doesn't have a specific quality it'll fall back to 360p, also ignored when type is set to audio
    type: 'audio' // can be “video”, “audio” and “videoandaudio”
  });
  x2x=
  de=await stream.pipe(fs.createWriteStream(`./${search.videos[1].title}.mp3`));
console.log()
 des=de.path;
titulo = des
  
  stream.on('start', () => {
    ctx.reply(`
🛠 Descargando Archivos de Audio 🛠

🎧${search.videos[1].title}🎧
`);
  });
  
  stream.on('info', (info) => {
    // { video_details: {..}, selected_format: {..}, formats: {..} }
    //ctx.reply(`[DOWNLOADER] Downloading ${info.video_details.title} by ${info.video_details.metadata.channel_name}`);
  });
  
  stream.on('progress', (info) => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`[DOWNLOADER] Downloaded ${info.percentage}% (${info.downloaded_size}MB) of ${info.size}MB`);
  });
  
  stream.on('end', () => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.info('[DOWNLOADER]', 'Done!');
    ctx.reply(`😱 Descarga Finalizada al 100% 😱

Enviando  el archivo ${search.videos[1].title}`)
    ctx.replyWithAudio({ source: titles })
    console.info('[DOWNLOADER]', 'Send video!');
    const path = require('path');

const directory = './';

fs.readdir(directory, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    if(file==titles){
    fs.unlink(path.join(directory, file), err => {
      if (err) throw err;
    });}
  }
});
  });
  
  stream.on('error', (err) => console.error('[ERROR]', err)); 
}start(text)
})
     bot.action('3', (ctx)=>{
  async function start(sea) {
 
 
  search = await youtube.search(name);
  let titles=`${search.videos[2].title}.mp3`
  const stream = youtube.download(search.videos[2].id, {
    format: 'mp4', // Optional, ignored when type is set to audio and defaults to mp4, and I recommend to leave it as it is
    
     // if a video doesn't have a specific quality it'll fall back to 360p, also ignored when type is set to audio
    type: 'audio' // can be “video”, “audio” and “videoandaudio”
  });
  x2x=
  de=await stream.pipe(fs.createWriteStream(`./${search.videos[2].title}.mp3`));
console.log()
 des=de.path;
titulo = des
  
  stream.on('start', () => {
    ctx.reply(`
🛠 Descargando Archivos de Audio 🛠

🎧${search.videos[2].title}🎧
`);
  });
  
  stream.on('info', (info) => {
    // { video_details: {..}, selected_format: {..}, formats: {..} }
    //ctx.reply(`[DOWNLOADER] Downloading ${info.video_details.title} by ${info.video_details.metadata.channel_name}`);
  });
  
  stream.on('progress', (info) => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`[DOWNLOADER] Downloaded ${info.percentage}% (${info.downloaded_size}MB) of ${info.size}MB`);
  });
  
  stream.on('end', () => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.info('[DOWNLOADER]', 'Done!');
    ctx.reply(`😱 Descarga Finalizada al 100% 😱

Enviando  el archivo ${search.videos[2].title}`)
    ctx.replyWithAudio({ source: titles })
    console.info('[DOWNLOADER]', 'Send video!');
    const path = require('path');

const directory = './';

fs.readdir(directory, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    if(file==titles){
    fs.unlink(path.join(directory, file), err => {
      if (err) throw err;
    });}
  }
});
  });
  
  stream.on('error', (err) => console.error('[ERROR]', err)); 
}start(text)
})
     bot.action('4', (ctx)=>{
  async function start(sea) {
 
 
  search = await youtube.search(name);
  let titles=`${search.videos[3].title}.mp3`
  const stream = youtube.download(search.videos[3].id, {
    format: 'mp4', // Optional, ignored when type is set to audio and defaults to mp4, and I recommend to leave it as it is
    
     // if a video doesn't have a specific quality it'll fall back to 360p, also ignored when type is set to audio
    type: 'audio' // can be “video”, “audio” and “videoandaudio”
  });
  x2x=
  de=await stream.pipe(fs.createWriteStream(`./${search.videos[3].title}.mp3`));
console.log()
 des=de.path;
titulo = des
  
  stream.on('start', () => {
    ctx.reply(`
🛠 Descargando Archivos de Audio 🛠

🎧${search.videos[3].title}🎧
`);
  });
  
  stream.on('info', (info) => {
    // { video_details: {..}, selected_format: {..}, formats: {..} }
    //ctx.reply(`[DOWNLOADER] Downloading ${info.video_details.title} by ${info.video_details.metadata.channel_name}`);
  });
  
  stream.on('progress', (info) => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`[DOWNLOADER] Downloaded ${info.percentage}% (${info.downloaded_size}MB) of ${info.size}MB`);
  });
  
  stream.on('end', () => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.info('[DOWNLOADER]', 'Done!');
    ctx.reply(`😱 Descarga Finalizada al 100% 😱

Enviando  el archivo ${search.videos[3].title}`)
    ctx.replyWithAudio({ source: titles })
    console.info('[DOWNLOADER]', 'Send video!');
    const path = require('path');

const directory = './';

fs.readdir(directory, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    if(file==titles){
    fs.unlink(path.join(directory, file), err => {
      if (err) throw err;
    });}
  }
});
  });
  
  stream.on('error', (err) => console.error('[ERROR]', err)); 
}start(text)
})
     bot.action('5', (ctx)=>{
  async function start(sea) {
 
 
  search = await youtube.search(name);
  let titles=`${search.videos[4].title}.mp3`
  const stream = youtube.download(search.videos[4].id, {
    format: 'mp4', // Optional, ignored when type is set to audio and defaults to mp4, and I recommend to leave it as it is
    
     // if a video doesn't have a specific quality it'll fall back to 360p, also ignored when type is set to audio
    type: 'audio' // can be “video”, “audio” and “videoandaudio”
  });
  x2x=
  de=await stream.pipe(fs.createWriteStream(`./${search.videos[4].title}.mp3`));
console.log()
 des=de.path;
titulo = des
  
  stream.on('start', () => {
    ctx.reply(`
🛠 Descargando Archivos de Audio 🛠

🎧${search.videos[4].title}🎧
`);
  });
  
  stream.on('info', (info) => {
    // { video_details: {..}, selected_format: {..}, formats: {..} }
    //ctx.reply(`[DOWNLOADER] Downloading ${info.video_details.title} by ${info.video_details.metadata.channel_name}`);
  });
  
  stream.on('progress', (info) => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`[DOWNLOADER] Downloaded ${info.percentage}% (${info.downloaded_size}MB) of ${info.size}MB`);
  });
  
  stream.on('end', () => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.info('[DOWNLOADER]', 'Done!');
    ctx.reply(`😱 Descarga Finalizada al 100% 😱

Enviando  el archivo ${search.videos[4].title}`)
    ctx.replyWithAudio({ source: titles })
    console.info('[DOWNLOADER]', 'Send video!');
    const path = require('path');

const directory = './';

fs.readdir(directory, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    if(file==titles){
    fs.unlink(path.join(directory, file), err => {
      if (err) throw err;
    });}
  }
});
  });
  
  stream.on('error', (err) => console.error('[ERROR]', err)); 
}start(text)
})



     bot.action('6', (ctx)=>{
  async function start(sea) {
 
 
  search = await youtube.search(name);
  let titles=`${search.videos[5].title}.mp3`
  const stream = youtube.download(search.videos[5].id, {
    format: 'mp4', // Optional, ignored when type is set to audio and defaults to mp4, and I recommend to leave it as it is
    
     // if a video doesn't have a specific quality it'll fall back to 360p, also ignored when type is set to audio
    type: 'audio' // can be “video”, “audio” and “videoandaudio”
  });
  x2x=
  de=await stream.pipe(fs.createWriteStream(`./${search.videos[5].title}.mp3`));
console.log()
 des=de.path;
titulo = des
  
  stream.on('start', () => {
    ctx.reply(`
🛠 Descargando Archivos de Audio 🛠

🎧${search.videos[5].title}🎧
`);
  });
  
  stream.on('info', (info) => {
    // { video_details: {..}, selected_format: {..}, formats: {..} }
    //ctx.reply(`[DOWNLOADER] Downloading ${info.video_details.title} by ${info.video_details.metadata.channel_name}`);
  });
  
  stream.on('progress', (info) => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`[DOWNLOADER] Downloaded ${info.percentage}% (${info.downloaded_size}MB) of ${info.size}MB`);
  });
  
  stream.on('end', () => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.info('[DOWNLOADER]', 'Done!');
    ctx.reply(`😱 Descarga Finalizada al 100% 😱

Enviando  el archivo ${search.videos[5].title}`)
    ctx.replyWithAudio({ source: titles })
    console.info('[DOWNLOADER]', 'Send video!');
    const path = require('path');

const directory = './';

fs.readdir(directory, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    if(file==titles){
    fs.unlink(path.join(directory, file), err => {
      if (err) throw err;
    });}
  }
});
  });
  
  stream.on('error', (err) => console.error('[ERROR]', err)); 
}start(text)
})



  
  let titles=`
1.${search.videos[0].title}

2.${search.videos[1].title}

3.${search.videos[2].title}

4.${search.videos[3].title}

5.${search.videos[4].title}

6.${search.videos[5].title}
`
    ctx.reply(titles, {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: "1", callback_data: "1" }, { text: "2",callback_data: "2" }, { text: " 3", callback_data: "3" }, { text: "4", callback_data: "4" }, { text: "5", callback_data: "5" }, { text: "6", callback_data: "6" } ],

                /* One button */
                [ { text: "⬅", callback_data: "left" },{ text: "❌", callback_data: "delete" } ,{ text: "➡", callback_data: "right" }  ]
            ]
        }
    });
});


/*DESCARGA DE VIDEOS Y AUDIOS*/
/*Audio*/
bot.command('ui', async (ctx) => {
   
  text= ctx.message.text 
  text=text.replace('./', ' ')

async function start(name) {
  const youtube = await new Innertube();
 
  const search = await youtube.search(name);
  let titles=`${search.videos[0].title}.mp3`
  const stream = youtube.download(search.videos[0].id, {
    format: 'mp4', // Optional, ignored when type is set to audio and defaults to mp4, and I recommend to leave it as it is
     // if a video doesn't have a specific quality it'll fall back to 360p, also ignored when type is set to audio
    type: 'audio' // can be “video”, “audio” and “videoandaudio”
  });
  
  de=await stream.pipe(fs.createWriteStream(`./${search.videos[0].title}.mp3`));
console.log()
 des=de.path;
titulo = des
  
  stream.on('start', () => {
    ctx.reply(`
🛠 Descargando Archivos de Audio 🛠

🎧${search.videos[0].title}🎧
`);
  });
  
  stream.on('info', (info) => {
    // { video_details: {..}, selected_format: {..}, formats: {..} }
    //ctx.reply(`[DOWNLOADER] Downloading ${info.video_details.title} by ${info.video_details.metadata.channel_name}`);
  });
  
  stream.on('progress', (info) => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`[DOWNLOADER] Downloaded ${info.percentage}% (${info.downloaded_size}MB) of ${info.size}MB`);
  });
  
  stream.on('end', () => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.info('[DOWNLOADER]', 'Done!');
    ctx.reply(`😱 Descarga Finalizada al 100% 😱

Enviando  el archivo ${search.videos[0].title}`)
    ctx.replyWithAudio({ source: titles })
    
const path = require('path');

const directory = './';

fs.readdir(directory, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    if(file==titles){
    fs.unlink(path.join(directory, file), err => {
      if (err) throw err;
    });}
  }
});
  });
  
  stream.on('error', (err) => console.error('[ERROR]', err)); 
}
  start(text)
})
/*Video*/
bot.command('vi', async (ctx) => {
   
  text= ctx.message.text 
  text=text.replace('./', ' ')

async function start(name) {
  const youtube = await new Innertube();
 
  const search = await youtube.search(name);
  let titles=`${search.videos[0].title}.mp4`
  const stream = youtube.download(search.videos[0].id, {
    format: 'mp4', // Optional, ignored when type is set to audio and defaults to mp4, and I recommend to leave it as it is
    quality:360,
     // if a video doesn't have a specific quality it'll fall back to 360p, also ignored when type is set to audio
    type: 'videoandaudio' // can be “video”, “audio” and “videoandaudio”
  });
  x2x=
  de=await stream.pipe(fs.createWriteStream(`./${search.videos[0].title}.mp4`));
console.log()
 des=de.path;
titulo = des
  
  stream.on('start', () => {
    ctx.reply(`
🛠 Descargando Archivos de Video 🛠

🎧${search.videos[0].title}🎧
`);
  });
  
  stream.on('info', (info) => {
    // { video_details: {..}, selected_format: {..}, formats: {..} }
    //ctx.reply(`[DOWNLOADER] Downloading ${info.video_details.title} by ${info.video_details.metadata.channel_name}`);
  });
  
  stream.on('progress', (info) => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`[DOWNLOADER] Downloaded ${info.percentage}% (${info.downloaded_size}MB) of ${info.size}MB`);
  });
  
  stream.on('end', () => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.info('[DOWNLOADER]', 'Done!');
    ctx.reply(`😱 Descarga Finalizada al 100% 😱

Enviando  el archivo ${search.videos[0].title}`)
    ctx.replyWithVideo({ source: titles })
    console.info('[DOWNLOADER]', 'Send video!');
    const path = require('path');

const directory = './';

fs.readdir(directory, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    if(file==titles){
    fs.unlink(path.join(directory, file), err => {
      if (err) throw err;
    });}
  }
});
  });
  
  stream.on('error', (err) => console.error('[ERROR]', err)); 
}
  start(text)
})

/*TRADUCCION*/
/*Español ingles*/
bot.command('transes', async (ctx) => {
  text= ctx.message.text 
  text=text.replace('/transes', ' ')
  translation=' '
  if(text.length!=0){
   translation= await translator(text, {from:'es', to:'en'})
    }else{
     translation= await translator('hola', {from:'es', to:'en'})
    }
ctx.reply(translation.text)
})
/*Ingles Español*/
bot.command('transen', async (ctx) => {
  text= ctx.message.text 
  text=text.replace('/transen', ' ')
  translation=' '
  if(text.length!=0){
   translation= await translator(text, {from:'en', to:'es'})
    }else{
     translation= await translator('hola', {from:'en', to:'en'})
    }
ctx.reply(translation.text)
})

bot.command('yt', (ctx)=>{
     text= ctx.message.text 
  text=text.replace('/yt', ' ')
  video= youtube.search(text).then((results) => {
    // Unless you specify a custom type you will only receive 'video' results
    console.log(results);
    const { videos } = results;
    video1=videos[0].link
    video2=videos[1].link
    video3=videos[2].link
    video4=videos[3].link
    ctx.reply(`Links

1) ${videos[0].title}  ||  views: ${videos[0].views}
${video1}

2) ${videos[1].title}  ||  views: ${videos[1].views} 
${video2} 

3) ${videos[2].title}  ||  views: ${videos[2].views}
${video3}

4) ${videos[3].title}  ||  views: ${videos[3].views}
${video4}
`)

});
  
})
  
bot.command('echo', (ctx)=>{
  let input = ctx.message.text
  let inputArray = input.split(' ')
  console.log(inputArray)
  let message=''
  if(inputArray.length==1){
    message='hola(?)'
  }else{
    inputArray.shift()
    message= inputArray.join(' ')
  }
  ctx.reply(message)
})
/*EVENTS*/
//bot.on('text' ,ctx =>{
  //ctx.reply(ctx.message.text)
  //console.log(ctx)
//})



//EXPRESS
const express = require('express')
const app = express()


app.get('/', (req,res)=>{
  res.end("My bot is online")
})

function live(){
  app.listen(3000, function(){
  console.log("flask is online")
})}
live();

//END EXPRESS


bot.launch()

console.log(bot)
console.log('bot is online')
