<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <ModalAlert
    @confirm="handleDelete"
    :cancelButtonLabel="$t('i18n.components.modal._global.cancel')"
    :confirmButtonLabel="
      $t('i18n.components.modal.resource_delete.confirm_button')
    "
    :message="$t('i18n.components.modal.resource_delete.message')"
    :modalName="modalName"
    :title="$t('i18n.components.modal.resource_delete.title')"
  />
</template>
<script setup lang="ts">
const modalName = "ModalResourceDeleteEvent";
const { handleCloseModal } = useModalHandlers(modalName);
const props = defineProps<{
  resourceId: string;
  entityId: string;
}>();
const eventId = computed(() => props.entityId);
const { deleteResource } = useEventResourcesMutations(eventId);
const handleDelete = async () => {
  await deleteResource(props.resourceId);
  handleCloseModal();
};
</script>
