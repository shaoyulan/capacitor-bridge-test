import { W as WebPlugin } from "./main-21b2b09d.js";
class DialogWeb extends WebPlugin {
  async alert(options) {
    window.alert(options.message);
  }
  async prompt(options) {
    const val = window.prompt(options.message, options.inputText || "");
    return {
      value: val !== null ? val : "",
      cancelled: val === null
    };
  }
  async confirm(options) {
    const val = window.confirm(options.message);
    return {
      value: val
    };
  }
}
export {
  DialogWeb
};
