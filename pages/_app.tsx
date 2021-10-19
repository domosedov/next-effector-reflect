import type { AppProps } from "next/app";
import { fork, serialize, Scope } from "effector";
import { Provider } from "effector-react/scope";

let clientScope: Scope;

const Application = ({ Component, pageProps }: AppProps) => {
  const scope = fork({
    values: {
      ...(clientScope ? serialize(clientScope) : {}),
      ...(pageProps.initialState ?? {}),
    },
  });

  if (typeof window !== "undefined") clientScope = scope;

  return (
    <Provider value={scope}>
      <Component {...pageProps} />
    </Provider>
  );
};
export default Application;
