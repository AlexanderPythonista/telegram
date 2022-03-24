const fs = require('fs');
const path = require('path');


var gis = require('g-i-s');
gis('uele a secso', logResults);

function logResults(error, results) {
  if (error) {
    console.log(error);
  }
  else {
    //results=JSON.stringify(results, null, '  ')
    console.log(results[1].url);
  }
}
/*
//const wiki = require('wikijs')
 const wiki = require('wikijs').default;

wiki({ apiUrl: 'https://es.wikipedia.org/w/api.php' })
	.page('Lex Lutor')
	.then(page => page.summary([1]))
	.then(console.log); // Bruce Wayne
/*
const directory = './';

fs.readdir(directory, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    if(file==){
    fs.unlink(path.join(directory, file), err => {
      if (err) throw err;
    });}
  }
});



const wiki = require('wikipedia');

(async () => {
	try {
    wiki.setLang('es')
		const summary = await wiki.summary('o//o');
    title=summary.title
    thumbnail=summary.thumbnail.source
    des=summary.description
    source=summary.extract
    too=`
${title}
${des}
${source}
${thumbnail}`
		console.log(too);
		//Response of type @wikiSummary - contains the intro and the main image
	} catch (error) {
		console.log(error);
		//=> Typeof wikiError
	}
})();

/*const fs = require('fs');
const Innertube = require('youtubei.js');

async function start(name) {
  const youtube = await new Innertube();
 
  const search = await youtube.search(name);
  let titles=`${search.videos[0].title}.mp3`
  const stream = youtube.download(search.videos[0].id, {
    format: 'mp4', // Optional, ignored when type is set to audio and defaults to mp4, and I recommend to leave it as it is
     // if a video doesn't have a specific quality it'll fall back to 360p, also ignored when type is set to audio
    type: 'audio' // can be “video”, “audio” and “videoandaudio”
  });
  
  de=stream.pipe(fs.createWriteStream(`./${search.videos[0].title}.mp3`));
 des=de.path;
//console.log(de)
  
  stream.on('start', () => {
    console.info('[DOWNLOADER]', 'Starting download now!');
  });
  
  stream.on('info', (info) => {
    // { video_details: {..}, selected_format: {..}, formats: {..} }
    console.info('[DOWNLOADER]', `Downloading ${info.video_details.title} by ${info.video_details.metadata.channel_name}`);
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
  });
  
  stream.on('error', (err) => console.error('[ERROR]', err)); 
}

start('esta es la cancion mas feliz del mundo segun cientificos');*/