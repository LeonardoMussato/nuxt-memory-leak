const state = ref({
  isBodyFixed: false,
});

function setFixedBody(newBodyFixedStatus: boolean) {
  state.value.isBodyFixed = newBodyFixedStatus;
}

function toggleFixedBody() {
  setFixedBody(!state.value.isBodyFixed);
}

function closeFixedBody() {
  setFixedBody(false);
}

const getIsFixedBody = computed(() => state.value.isBodyFixed);

export { getIsFixedBody, toggleFixedBody, closeFixedBody };
