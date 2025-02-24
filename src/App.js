import React, { useState } from "react";
import SplashScreen from "./SplashScreen";
import Nav from "./Nav.js";


const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    < >
      {loading ? (
        <SplashScreen onFinish={() => setLoading(false)} />
      ) : (
        <Nav />
      )}
    </>
  );
};

export default App;
