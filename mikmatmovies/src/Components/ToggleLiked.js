import React, { useState } from "react";

function ToggleLiked() {
  const [liked, setLiked] = useState(false);
  const toggleLiked = () => {
    setLiked(!liked);
    return liked;
    //anropa databas
  };
}

export default ToggleLiked;
