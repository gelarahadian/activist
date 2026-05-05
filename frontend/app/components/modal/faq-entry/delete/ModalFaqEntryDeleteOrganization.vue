<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <ModalAlert
    @confirm="handleDelete"
    :cancelButtonLabel="$t('i18n.components.modal._global.cancel')"
    :confirmButtonLabel="
      $t('i18n.components.modal.faq_entry_delete.confirm_button')
    "
    :message="$t('i18n.components.modal.faq_entry_delete.message')"
    :modalName="modalName"
    :title="$t('i18n.components.modal.faq_entry_delete.title')"
  />
</template>
<script setup lang="ts">
const modalName = "ModalFaqEntryDeleteOrganization";
const { handleCloseModal } = useModalHandlers(modalName);
const props = defineProps<{
  faqEntryId: string;
  entityId: string;
}>();
const organizationId = computed(() => props.entityId);
const { deleteFAQ } = useOrganizationFAQEntryMutations(organizationId);
const handleDelete = async () => {
  await deleteFAQ(props.faqEntryId);
  handleCloseModal();
};
</script>
