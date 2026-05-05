<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <CardConnect pageType="group" :socialLinks="socialLinks" />
</template>

<script setup lang="ts">
const props = defineProps<{
  group: Group | null;
}>();

// Use computed to ensure social links are reactive to store changes.
const socialLinks = computed(() => props.group?.socialLinks ?? []);
</script>
