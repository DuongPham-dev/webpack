import { MESSAGE } from "./scripts/constants.js";

// CSS
import "./styles/index.css";

document.querySelector("button").addEventListener("click", async () => {
  const { showMessage } = await import("./scripts/display.js");

  showMessage(MESSAGE.HELLO);
});
