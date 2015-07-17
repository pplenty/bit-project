cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.device-motion/www/Acceleration.js",
        "id": "org.apache.cordova.device-motion.Acceleration",
        "clobbers": [
            "Acceleration"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-motion/www/accelerometer.js",
        "id": "org.apache.cordova.device-motion.accelerometer",
        "clobbers": [
            "navigator.accelerometer"
        ]
    },
    {
        "file": "plugins/com.knowledgecode.cordova.websocket/www/websocket.js",
        "id": "com.knowledgecode.cordova.websocket.websocket",
        "clobbers": [
            "WebSocket"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.device-motion": "0.2.11",
    "com.knowledgecode.cordova.websocket": "0.8.3"
}
// BOTTOM OF METADATA
});