import LXDiscover from "@/pages/discover";
import LXFriend from "@/pages/friend";
import LXMine from "@/pages/mine";

const routes = [
  {
    path: "/",
    element: <LXDiscover />,
  },
  {
    path: "/mine",
    element: <LXMine />,
  },
  {
    path: "/friend",
    element: <LXFriend />,
  },
];
export default routes;
