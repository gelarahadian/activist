<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <ModalBase :modalName="modalName" :onClose="handleOnCloseModal">
    <FormResource
      :formData="formData"
      :handleSubmit="handleSubmit"
      :submitLabel="submitLabel"
      :title="title"
    />
  </ModalBase>
</template>

<script setup lang="ts">
const modalName = "ModalResourceOrganization";
const { context, handleCloseModal } = useModalHandlers<{ resource?: Resource }>(
  modalName
);
const route = useRoute();

const organizationId = computed(() => {
  return typeof route.params.orgId === "string" ? route.params.orgId : "";
});

const { data: organization } = useGetOrganization(organizationId);
const { createResource, updateResource } =
  useOrganizationResourcesMutations(organizationId);

const formData = ref<Resource | undefined>();

let isAddMode = true;
let submitLabel = "";
let title = "";

watch(context, (newContext) => {
  isAddMode = !newContext?.resource;

  submitLabel = isAddMode
    ? "i18n.components.modal.resource._global.add_resource"
    : "i18n.components.modal.resource._global.update_resource";

  title = isAddMode
    ? "i18n.components.modal.resource._global.add_resource"
    : "i18n.components.modal.resource._global.edit_resource";

  if (!isAddMode) {
    formData.value = {} as Resource;
    formData.value.id = newContext?.resource?.id || "";
    formData.value.name = newContext?.resource?.name || "";
    formData.value.description = newContext?.resource?.description || "";
    formData.value.url = newContext?.resource?.url || "";
    formData.value.topics = newContext?.resource?.topics || [];
    formData.value.order = newContext?.resource?.order || 0;
  }
});

async function handleSubmit(values: unknown) {
  const newValues = {
    ...formData.value,
    ...(values as Resource),
    order:
      formData.value?.order ?? (organization.value?.resources ?? []).length,
  };
  const success = isAddMode
    ? await createResource(newValues as ResourceInput)
    : await updateResource(newValues as ResourceInput);
  if (success) {
    handleCloseModal();
    formData.value = {} as Resource;
  }
}

const handleOnCloseModal = () => {
  formData.value = {} as Resource;
};
</script>
