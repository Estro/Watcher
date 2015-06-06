var Youtube = require("youtube-api");

exports.home = function(req, res) {
	res.send('Watcher API v1');
    // Youtube.authenticate({
    //     type: "oauth",
    //     token: req.user.attributes.token
    // });

    // // List your channels
    // Youtube.channels.list({
    //     "part": "contentDetails",
    //     "mine": true
    // }, function(err, data) {
    //     var historyId = data.items[0].contentDetails.relatedPlaylists.watchHistory;
    //     // List your channels
    //     Youtube.playlistItems.list({
    //         "part": "snippet",
    //         "playlistId": historyId
    //     }, function(err, odata) {
    //     	res.json(odata);
    //     });
    // });
};
