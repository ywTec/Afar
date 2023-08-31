import { defineComponent as s, computed as a, openBlock as r, createElementBlock as c, normalizeClass as p, renderSlot as u } from "vue";
import "./index.vue2.ts";
import l from "../../../_virtual/_plugin-vue_export-helper.ts";
const d = s({
  name: "YwButton"
}), f = /* @__PURE__ */ Object.assign(d, {
  props: {
    type: {
      type: String,
      default: "default"
    }
  },
  setup(t) {
    const e = t, o = a(() => `button-${e.type}`);
    return (n, m) => (r(), c("button", {
      class: p(["button", o.value])
    }, [
      u(n.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), y = /* @__PURE__ */ l(f, [["__scopeId", "data-v-ca85caf8"]]);
export {
  y as default
};
