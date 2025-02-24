import React, { useState } from "react";
import SplashScreen from "./SplashScreen";
import Welcome from "./Welcome.js";
import AppRoutes from "./Routes.js";


const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    < >
      {loading ? (
        <SplashScreen onFinish={() => setLoading(false)} />
      ) : (
        <>
        <AppRoutes />
        </>
      )}
    </>
  );
};

export default App;
