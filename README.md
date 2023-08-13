# CC-for-HLS
CC-for-HLS is a p2p assisted adaptive bitrate HTTP video streaming(HLS) transmit system.

It based on node.js and socket.io.
You can also use this repo as a bittorrent-like experimental P2P platform.

The video module is based on FFmpeg, so it can be easily adapted to stream files in other formats.

## Installation

This is a Node project, currently does not support NPM installation
Before installing, download and install Node.js 16 or above. 

Use<br>`clone https://github.com/gitgjr/P2P-video-distribution-system.git `<br>clone the project.

Then install dependencies:<br>`npm i`

Run the sender and receiver:<br> `node sender.js` and `node receiver.js`

The files kept by the node are placed in the resource folder, and the Data folder is the download path.

Change test.js to customize your own test tasks.