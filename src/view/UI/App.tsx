import { FC, lazy, Suspense } from "react";
import { useRoute } from "react-router5";
import { constants } from "router5";
import { LoadingScreen } from "./components/LoadingScreen";
import { ERouteNames } from "../../router/routes";
//TODO: может быть нужно будет выносить 
import "react-phone-number-input/style.css";
import "./style.css";

const HomePage = lazy(() => import("./pages/home"));
const ProfilePage = lazy(() => import("./pages/profile"));
const OrdersPage = lazy(() => import("./pages/orders"));
const SettingPage = lazy(() => import("./pages/setting"));
const NotFoundPage = lazy(() => import("./pages/notFound"));
const EventPage = lazy(() => import("./pages/event"));

export const App: FC = () => {
  const router = useRoute();

  let page: JSX.Element;

  switch (router.route.name) {
    case ERouteNames.HOME:
      page = <HomePage />;
      break;

    case ERouteNames.ORDERS:
      page = <OrdersPage />;
      break;

    case ERouteNames.PROFILE:
      page = <ProfilePage />;
      break;
    case ERouteNames.SETTING:
      page = <SettingPage />;
      break;
    case ERouteNames.EVENT:
      page = <EventPage />;
      break;

    case constants.UNKNOWN_ROUTE:
    default:
      page = <NotFoundPage />;
  }

  return <Suspense fallback={<LoadingScreen />}>{page}</Suspense>;
};

export default App;
