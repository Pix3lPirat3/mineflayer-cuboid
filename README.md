<h1 align="center">mineflayer-cuboid</h1>
<p align="center"><i>A simple class for selecting a cuboid region in mineflayer.</i></p>

<p align="center">
  <img src="https://img.shields.io/npm/v/mineflayer-cuboid" />
  <img src="https://img.shields.io/github/repo-size/Pix3lPirat3/mineflayer-cuboid" />
  <img src="https://img.shields.io/npm/dm/mineflayer-cuboid" />
  <img src="https://img.shields.io/github/contributors/Pix3lPirat3/mineflayer-cuboid" />
  <img src="https://img.shields.io/github/license/Pix3lPirat3/mineflayer-cuboid" />
</p>

---

### Getting Started

This plugin is built using Node and can be installed using:
```bash
npm install --save mineflayer-cuboid
```

### Simple Usage

```js
// Create your bot
const mineflayer = require("mineflayer");
const bot = mineflayer.createBot({ username: "Player" });

const Cuboid = require('mineflayer-cuboid');
var v = require('vec3');

let mine_cuboid = new Cuboid(v(-5, -5, -5), v(5, 0, 5));



// Do stuff
bot.doStuff()
```

### Documentation

Read the code, do stuff

### License

This project uses the [MIT](https://github.com/Pix3lPirat3/mineflayer-cuboid) license.