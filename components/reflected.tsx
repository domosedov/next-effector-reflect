import * as model from "../model";
import { reflect } from "@effector/reflect/ssr";

export const TestReflected = reflect({
  view: ({ count }: { count: number }) => (
    <div>Reflected mounted times: {count}</div>
  ),
  bind: {
    count: model.$countB,
  },
  hooks: {
    mounted: model.mountedB,
  },
});
