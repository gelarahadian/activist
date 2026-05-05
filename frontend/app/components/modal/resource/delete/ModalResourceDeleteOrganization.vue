<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <ModalAlert
    @confirm="handleDelete"
    :cancelButtonLabel="$t('i18n.components.modal._global.cancel')"
    :confirmButtonLabel="
      $t('i18n.components.modal.resource_delete.confirm_button')
    "
    :message="
      $t(
        'i18n.components.modal_resource_delete_organization.confirm_delete_message'
      )
    "
    :modalName="modalName"
    :title="$t('i18n.components.modal.resource_delete.title')"
  />
</template>
<script setup lang="ts">
const modalName = "ModalResourceDeleteOrganization";
const { handleCloseModal } = useModalHandlers(modalName);
const props = defineProps<{
  resourceId: string;
  entityId: string;
}>();
const organizationId = computed(() => props.entityId);
const { deleteResource } = useOrganizationResourcesMutations(organizationId);
const handleDelete = async () => {
  await deleteResource(props.resourceId);
  handleCloseModal();
};
</script>
