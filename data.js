var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrata",
      "name": "Entrata",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9472812638054133,
          "pitch": 0.1073388023968711,
          "rotation": 0,
          "target": "1-bagno"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bagno",
      "name": "Bagno",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.8507138726051533,
        "pitch": 0.030410565478367957,
        "fov": 1.222445190334001
      },
      "linkHotspots": [
        {
          "yaw": -2.980858994516087,
          "pitch": 0.042071630719876296,
          "rotation": 0,
          "target": "0-entrata"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
