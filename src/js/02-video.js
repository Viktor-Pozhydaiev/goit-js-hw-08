import Vimeo from '@vimeo/player';
import throttle from 'lodash/throttle';
import { save, load } from './storage.js';

const iframe = document.querySelector('iframe');
const PLAY_TIME = 'videoplayer-current-time';
const player = new Vimeo(iframe);
const startTime = load(PLAY_TIME);
// console.log(startTime);
player.on('timeupdate', throttle(getTime, 1000));

player
  .setCurrentTime(startTime.seconds)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
function getTime(data) {
  save(PLAY_TIME, data);
}
