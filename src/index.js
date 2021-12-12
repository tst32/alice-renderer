/**
 * Alice renderer module.
 */

const {reply} = require('./reply');
const {text} = require('./text');
const {br} = require('./br');
const {tts, audio, effect, pause} = require('./tts');
const {textTts} = require('./text-tts');
const {buttons} = require('./buttons');
const {plural} = require('./plural');
const {userify} = require('./userify');
const {select} = require('./select');
const {once} = require('./once');
const {configure} = require('./configure');
const {image} = require('./image');
const {enumerate} = require('./enumerate');
const {startCleanupService, getSessions} = require('./sessions');

startCleanupService();

module.exports = {
  reply,
  text,
  tts,
  textTts,
  buttons,
  audio,
  effect,
  pause,
  br,
  plural,
  userify,
  select,
  once,
  configure,
  image,
  enumerate,
  getSessions,
};
