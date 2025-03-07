import React, { useState } from "react";
import SplashScreen from "./SplashScreen";
import Welcome from "./Welcome.js";
import AppRoutes from "./Routes.js";
import Menu from "./components/Menu.js";


const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    < >
      {loading ? (
        <SplashScreen onFinish={() => setLoading(false)} />
      ) : (
        <>
        <AppRoutes />
        <Menu />
        </>
      )}
    </>
  );
};

export default App;
