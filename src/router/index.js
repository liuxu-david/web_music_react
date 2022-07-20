import { Navigate } from "react-router-dom";

import LXDiscover from "@/pages/discover";
import LXFriend from "@/pages/friend";
import LXMine from "@/pages/mine";
import LXRecommend from "../pages/discover/children-pages/recommend";
import LXRanking from "../pages/discover/children-pages/ranking";
import LXSongs from "../pages/discover/children-pages/songs";
import LXDjradio from "../pages/discover/children-pages/djradio";
import LXArtist from "../pages/discover/children-pages/artist";
import LXAlbum from "../pages/discover/children-pages/album";

const routes = [
  {
    path: "/",
    element: <Navigate to="/discover" />,
  },
  {
    path: "/discover",
    element: <LXDiscover />,
    children: [
      {
        path: "",
        element: <Navigate to="recommend" />,
      },
      {
        path: "recommend",
        element: <LXRecommend />,
      },
      {
        path: "ranking",
        element: <LXRanking />,
      },
      {
        path: "songs",
        element: <LXSongs />,
      },
      {
        path: "djradio",
        element: <LXDjradio />,
      },
      {
        path: "artist",
        element: <LXArtist />,
      },
      {
        path: "album",
        element: <LXAlbum />,
      },
    ],
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
