import { useEffect } from "react";

const dtitle = (title) => {
  useEffect(() => {
    document.title = `${title} | ToyStore`;
  }, [title]);
};

export default dtitle;
