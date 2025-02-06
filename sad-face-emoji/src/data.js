import { reactive } from 'vue'

const data = reactive({
  hair: [
    {
      src: 'https://i1.wp.com/www.roeselienraimond.com/wp-content/uploads/2016/07/red_fox_portrait.jpg',
      selected: false,
    },
    {
      src: 'https://i.pinimg.com/736x/d2/eb/07/d2eb07f9f09303360f7d118ccada55cc.jpg',
      selected: false,
    },
    {
      src: 'https://i.pinimg.com/736x/b2/33/07/b233079f97fe4191d9c3cbd511d6d820.jpg',
      selected: false,
    },
  ],
  face: [
    {
      src: 'https://i.pinimg.com/736x/3d/30/c7/3d30c7eab56477f36e00aa869ef03d28.jpg',
      selected: false,
    },
  ],
})

export default data
