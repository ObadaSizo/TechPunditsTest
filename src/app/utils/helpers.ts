let isProcessing = false;

export function debounceProcess(callback: () => void) {
  if (!isProcessing) {
    isProcessing = true;
    callback();
    setTimeout(() => {
      isProcessing = false;
    }, 100);
  }
}