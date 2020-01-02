const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);
var command = ffmpeg();
function convert(input, output, callback) {
    ffmpeg(input)
        .output(output)
        .on('end', function() {                    
            console.log('conversion ended');
            callback(null);
        }).on('error', function(err){
            console.log('error: ', err.code, err.message);
            callback(err);
        }).run();
}

convert('Chh.mkv', 'output.wav', function(err){
   if(!err) {
       console.log('conversion complete');
       //...

   }
});