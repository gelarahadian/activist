<template>
  <!-- Modal -->
  <ModalCommandPalette :paletteData="commandPaletteData" />
  <ModalCreateEvent />
  <ModalCreateOrganization />
  <ModalCreateGroup />
  <ModalAlert />
  <ModalMediaImageCarousel />
  <ModalOrganizationOverview />

  <ModalSharePage />

  <!-- QR Code -->
  <ModalQRCode />

  <ModalFaqEntryOrganization />
  <ModalFaqEntryEvent />
  <ModalFaqEntryGroup />

  <ModalResourceEvent />
  <ModalResourceGroup />
  <ModalResourceOrganization />

  <ModalSocialLinksOrganization />
  <ModalTextOrganization />
  <ModalSocialLinksEvent />
  <ModalTextEvent />
  <ModalSocialLinksGroup />
  <ModalTextGroup />

  <!-- <ModalUploadImageIcon
      @closeModal="handleCloseModalUploadImageIcon"
      :entityId="eventId || ''"
      :entityType="EntityType.EVENT"
    />
    <ModalUploadImageGroup
      @closeModal="handleCloseModalUploadImage"
      @upload-complete="handleUploadComplete"
      :groupId="group?.id || ''"
      :images="images || []"
    />
    <ModalUploadImageOrganization
      @closeModal="handleCloseModalUploadImage"
      :images="images || []"
      :orgId="organization?.id || ''"
    /> -->
</template>
