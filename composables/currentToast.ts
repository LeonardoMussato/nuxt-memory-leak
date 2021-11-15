import Toast from "../models/toast";

const state = ref({ currentToast: null });

function setToast(newToast: Toast) {
  state.value.currentToast = newToast;
}

async function resetToast() {
  setToast(null);
}

async function displayToast(newToast: Toast) {
  setToast(newToast);
  setTimeout(() => resetToast(), newToast.delay ?? 3000);
}

const getToast = computed(() => state.value.currentToast);

export { displayToast, getToast };
