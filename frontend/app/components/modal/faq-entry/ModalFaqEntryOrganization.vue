<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <ModalBase :modalName="modalName" :onClose="handleOnCloseModal">
    <FormFAQEntry
      :formData="formData"
      :handleSubmit="handleSubmit"
      :submitLabel="submitLabel"
      :title="title"
    />
  </ModalBase>
</template>

<script setup lang="ts">
const modalName = "ModalFaqEntryOrganization";
const { context, handleCloseModal } = useModalHandlers<{ faqEntry?: FaqEntry }>(
  modalName
);
const route = useRoute();

const orgId = computed(() => {
  return typeof route.params.orgId === "string" ? route.params.orgId : "";
});

const { data: organization } = useGetOrganization(orgId);
const { createFAQ, updateFAQ } = useOrganizationFAQEntryMutations(orgId);

const formData = ref({
  id: "",
  iso: "en",
  order: (organization.value?.faqEntries ?? []).length,
  question: "",
  answer: "",
});

let isAddMode = true;
let submitLabel = "";
let title = "";

watch(context, (newContext) => {
  isAddMode = !newContext?.faqEntry;

  submitLabel = isAddMode
    ? "i18n.components.modal.faq_entry._global.add_faq_entry"
    : "i18n.components.modal._global.update_texts";

  title = isAddMode
    ? "i18n.components.modal.faq_entry._global.add_faq_entry"
    : "i18n.components.modal.faq_entry._global.edit_entry";

  if (!isAddMode) {
    formData.value.id = newContext?.faqEntry?.id || "";
    formData.value.question = newContext?.faqEntry?.question || "";
    formData.value.answer = newContext?.faqEntry?.answer || "";
  }
});

async function handleSubmit(values: unknown) {
  let updateResponse = false;
  const newValues = { ...formData.value, ...(values as FaqEntry) };
  console.log("newValues", newValues);

  updateResponse = isAddMode
    ? await createFAQ(newValues as FaqEntry)
    : await updateFAQ(newValues as FaqEntry);

  if (updateResponse) {
    handleCloseModal();
    formData.value = {
      id: "",
      iso: "en",
      order: (organization.value?.faqEntries ?? []).length,
      question: "",
      answer: "",
    };
  }
}

const handleOnCloseModal = () => {
  formData.value = {
    id: "",
    iso: "en",
    order: (organization.value?.faqEntries ?? []).length,
    question: "",
    answer: "",
  };
};
</script>
