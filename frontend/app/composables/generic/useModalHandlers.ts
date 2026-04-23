// SPDX-License-Identifier: AGPL-3.0-or-later

export function useModalHandlers<T = unknown>(modalName: string) {
  const { updateContext, openModal, closeModal, modals } = useModals();

  const handleOpenModal = (params?: T) => {
    openModal(modalName, params);
  };
  const handleCloseModal = () => closeModal(modalName);

  const handleUpdateContext = (params: T) => {
    updateContext(modalName, params);
  };

  const modal = computed(() => modals[modalName]);

  return {
    openModal: handleOpenModal,
    handleCloseModal,
    updateContext: handleUpdateContext,
    context: readonly(computed(() => modal.value?.context as T)),
  };
}
