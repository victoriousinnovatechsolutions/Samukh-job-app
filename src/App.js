import React, { useState } from "react";
import SplashScreen from "./SplashScreen";
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
