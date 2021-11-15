interface ToastInterface {
  text: string;
  component?: string;
  delay: number;
}

class Toast implements ToastInterface {
  text: string;
  component?: string;
  delay: number;
  constructor({ text, component, delay }: ToastInterface) {
    this.text = text;
    this.component = component ?? "DefaultToast";
    this.delay = delay;
  }
}

export default Toast;
