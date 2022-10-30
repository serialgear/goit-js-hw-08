import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const TIMEKEY = 'videoplayer-current-time';

const onPlay = function (e) {
  localStorage.setItem(TIMEKEY, JSON.stringify(e.seconds));
};

player.on('timeupdate', throttle(onPlay, 1000));

const getTimeMemory = localStorage.getItem(TIMEKEY);

if (getTimeMemory !== null) {
  player.setCurrentTime(getTimeMemory);
}
