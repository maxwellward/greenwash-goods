import type {
  PiniaCustomStateProperties,
  StoreActions,
  StoreGeneric,
  StoreGetters,
  StoreState,
} from "pinia";
import type { ToRefs } from "vue";
import { isReactive, isRef, toRaw, toRef } from "vue";

type Extracted<T> = ToRefs<
  StoreState<T> & StoreGetters<T> & PiniaCustomStateProperties<StoreState<T>>
> &
  StoreActions<T>;

/**
 * Creates an object of references with all the state, getters, actions
 * and plugin-added state properties of the store.
 *
 * @param store - store to extract the refs from
 */
export function extractStore<T extends StoreGeneric>(store: T): Extracted<T> {
  const rawStore = toRaw(store);
  const refs: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(rawStore)) {
    if (isRef(value) || isReactive(value)) {
      refs[key] = toRef(store, key);
    } else if (typeof value === "function") {
      refs[key] = value;
    }
  }

  return refs as Extracted<T>;
}
