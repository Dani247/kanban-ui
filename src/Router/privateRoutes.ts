import { lazy } from 'react'

const Home = lazy(() => import("../Components/Home"))
const CreateEditBoard = lazy(() => import("../Components/CreateEditBoard"))
const Profile = lazy(() => import("../Components/Profile"))
const Settings = lazy(() => import("../Components/Settings"))

export const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
    exact: true,
  },
  {
    name: "Create new Board",
    path: "/new",
    component: CreateEditBoard
  },
  {
    name: "Create new Board",
    path: "/editBoard",
    component: CreateEditBoard
  },
  {
    name: "User Profile",
    path: "/profile",
    component: Profile
  },
  {
    name: "User Settings",
    path: "/settings",
    component: Settings
  }
];

export default routes;