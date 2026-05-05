<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <ModalAlert
    @confirm="handleDelete"
    :cancelButtonLabel="$t('i18n.components.modal._global.cancel')"
    :confirmButtonLabel="
      $t(
        'i18n.components.modal_faq_entry_delete_event.delete_confirmation.confirm_button'
      )
    "
    :message="
      $t('i18n.components.modal_faq_entry_delete_event.delete_confirmation')
    "
    :modalName="modalName"
    :title="
      $t(
        'i18n.components.modal_faq_entry_delete_event.delete_confirmation.title'
      )
    "
  />
</template>
<script setup lang="ts">
const modalName = "ModalFaqEntryDeleteEvent";
const { handleCloseModal } = useModalHandlers(modalName);
const props = defineProps<{
  faqEntryId: string;
  entityId: string;
}>();
const eventId = computed(() => props.entityId);
const { deleteFAQ } = useEventFAQEntryMutations(eventId);
const handleDelete = async () => {
  await deleteFAQ(props.faqEntryId);
  handleCloseModal();
};
</script>
