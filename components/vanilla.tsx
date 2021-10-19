import { useEffect } from "react";
import { useStore, useEvent } from "effector-react/scope";
import * as model from "../model";

export const TestVanilla = () => {
  const count = useStore(model.$countA);
  const mount = useEvent(model.mountedA);

  useEffect(() => {
    mount();
  }, [mount]);

  return <div>Vanilla mounted times: {count}</div>;
};
