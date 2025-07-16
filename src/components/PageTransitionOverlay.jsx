import { useEffect, useState } from "react";
import "./PageTransition.css";

const PageTransitionOverlay = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
      onFinish?.(); // gọi callback nếu có
    }, 600); // khớp animation

    return () => clearTimeout(timeout);
  }, [onFinish]);

  if (!visible) return null;

  return <div className="page-transition" />;
};

export default PageTransitionOverlay;
