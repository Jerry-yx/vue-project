import HelloWorld from '../components/HelloWorld.vue';
import Main from '../pages/Main.vue';
import Count from '../pages/Count.vue';
import Home from '../pages/Home.vue';

export default [
  {
    path: '/main',
    component: Main,
  },
  {
  path: '/home',
  name:'home',
  component: Home,
  children:[
    {
    path: 'count',
    component: Count,
  },
    {
    path: 'helloWorld',
    component: HelloWorld,
  },
]
}
]