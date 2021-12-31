import * as computer from "../utils/Json/computer.json";
import * as phone from "../utils/Json/phone.json";
import * as email from "../utils/Json/email.json";
import * as reset from "../utils/Json/reset.json";
import * as notfound from "../utils/Json/404.json";

export const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: computer.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
    className: "image",
  },
};
export const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: phone.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
    className: "image",
  },
};
export const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: email.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
    className: "image",
  },
};
export const defaultOptions3 = {
  loop: true,
  autoplay: true,
  animationData: reset.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
    className: "image",
  },
};
export const defaultOptions4 = {
  loop: true,
  autoplay: true,
  animationData: notfound.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
    className: "image",
  },
};
