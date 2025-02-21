import { reactive } from 'vue'
//z-indices:
//1: back hair
//2: base skin
//3: eyes, mouth
//4: bangs
//5: side bangs
//6: clothes
const data = reactive({
  base: [
    {
      src: '/base.png',
      selected: true,
      hue: 0,
      brightness: 100,
      zIndex: 2,
    },
  ],
  frontHair: [
    {
      src: '/long front bang.png',
      selected: false,
      hue: 60,
      brightness: 80,
      zIndex: 4,
    },
    {
      src: '/parted front bang.png',
      selected: false,
      hue: 60,
      brightness: 80,
      zIndex: 4,
    },
    {
      src: '/straight front bang.png',
      selected: false,
      hue: 60,
      brightness: 80,
      zIndex: 4,
    },
    {
      src: '/sailor moon front bang.png',
      selected: false,
      hue: 60,
      brightness: 80,
      zIndex: 4,
    },
  ],
  sideBang: [
    {
      src: '/short side bang.png',
      selected: false,
      hue: 60,
      brightness: 80,
      zIndex: 5,
    },
    {
      src: '/medium side bang.png',
      selected: false,
      hue: 60,
      brightness: 80,
      zIndex: 5,
    },
    {
      src: '/long side bang.png',
      selected: false,
      hue: 60,
      brightness: 80,
      zIndex: 5,
    },
  ],
  backHair: [
    {
      src: '/wolf cut hair.png',
      selected: false,
      hue: 60,
      brightness: 80,
      zIndex: 1,
    },
    {
      src: '/long hair.png',
      selected: false,
      hue: 60,
      brightness: 80,
      zIndex: 1,
    },
    {
      src: '/short hair.png',
      selected: false,
      hue: 60,
      brightness: 80,
      zIndex: 1,
    },
  ],
  eyes: [
    {
      src: '/closed pensive eyes.png',
      selected: false,
      hue: 67,
      brightness: 100,
      zIndex: 3,
    },
    {
      src: '/closed happy eyes.png',
      selected: false,
      hue: 67,
      brightness: 100,
      zIndex: 3,
    },
    {
      src: '/open eyes.png',
      selected: false,
      hue: 67,
      brightness: 100,
      zIndex: 3,
    },
  ],
  mouth: [
    {
      src: '/frown mouth.png',
      selected: false,
      hue: 0,
      brightness: 100,
      zIndex: 3,
    },
    {
      src: '/very happy mouth.png',
      selected: false,
      hue: 0,
      brightness: 100,
      zIndex: 3,
    },
    {
      src: '/3 mouth.png',
      selected: false,
      hue: 0,
      brightness: 100,
      zIndex: 3,
    },
    {
      src: '/bleh mouth.png',
      selected: false,
      hue: 0,
      brightness: 100,
      zIndex: 3,
    },
    {
      src: '/slightly happy mouth.png',
      selected: false,
      hue: 0,
      brightness: 100,
      zIndex: 3,
    },
  ],
  shirt: [
    {
      src: '/sweater shirt.png',
      selected: false,
      hue: 0,
      brightness: 100,
      zIndex: 6,
    },
    {
      src: '/tshirt shirt.png',
      selected: false,
      hue: 0,
      brightness: 100,
      zIndex: 6,
    },
  ],
})

export default data
