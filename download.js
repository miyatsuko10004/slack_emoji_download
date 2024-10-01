var Slack = require('slack-node');
var request = require('request');
var fs = require('fs');

apiToken = "<apitoken>";
slack = new Slack(apiToken);

slack.api("emoji.list", function (err, response) {
    for(key in response.emoji){
        url = response.emoji[key];
        //エイリアスは無視
        if(url.match(/alias/)){
            continue;
        }
        request
        .get(url)
        .on('response', function (res) {
        })
        .pipe(fs.createWriteStream('image\\'+key+'.png'));
    }
});
