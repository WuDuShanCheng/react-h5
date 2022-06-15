import Loadable from 'react-loadable';
import Loading from '@/components/Loading'

// const Dashboard = Loadable({loader: () => import('../views/dashboard'),loading: Loading});
// const Guide = Loadable({loader: () => import('../views/guide'),loading: Loading});
// const Dashboard = Loadable({loader: () => import(/*webpackChunkName:'Dashboard'*/'@/views/dashboard'),loading: Loading});
import Guide from "@/views/guide"
import Dashboard from "@/views/dashboard"
export default [
  { path: "/dashboard", component: Dashboard, roles: ["admin","editor","guest"] },
  { path: "/guide", component:Guide, roles: ["admin","editor"] }
  ]
