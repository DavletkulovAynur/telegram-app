import { FC, lazy, Suspense } from "react";
import { useRoute } from "react-router5";
import { constants } from "router5";
import { LoadingScreen } from "./components/LoadingScreen";
import { ERouteNames } from "../../router/routes";
import "./style.css";

const HomePage = lazy(() => import("./pages/home"));
const ProfilePage = lazy(() => import("./pages/profile"));
const OrdersPage = lazy(() => import("./pages/orders"));
const NotFoundPage = lazy(() => import("./pages/notFound"));

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

    case constants.UNKNOWN_ROUTE:
    default:
      page = <NotFoundPage />;
  }

  return <Suspense fallback={<LoadingScreen />}>{page}</Suspense>;
};

export default App;
