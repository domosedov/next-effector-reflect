import { createStore, createEvent } from "effector";

export const mountedA = createEvent();
export const $countA = createStore(0).on(mountedA, (s) => s + 1);

export const mountedB = createEvent();
export const $countB = createStore(0).on(mountedB, (s) => s + 1);
