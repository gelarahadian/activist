<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <ModalBase :modalName="modalName">
    <MediaImageCarousel
      :entityType="context?.entityType"
      :fullscreen="true"
      :imageUrls="[...(context?.imageUrls || [])]"
    />
  </ModalBase>
</template>

<script setup lang="ts">
const { context } = useModalHandlers<{
  imageUrls: string[];
  entityType: EntityType;
}>("ModalMediaImage");

const modalName = "ModalMediaImage";
</script>
