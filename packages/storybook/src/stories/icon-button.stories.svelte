<script lang="ts">
import { Meta, Story } from '@storybook/addon-svelte-csf';
import { IconButton } from '@viamrobotics/prime-core';
</script>

<Meta title="Elements/IconButton" />

<Story name="Primary">
  <IconButton
    icon="plus"
    label="Add object"
  />
</Story>

<Story name="Secondary">
  <IconButton
    icon="plus"
    label="Add secondary object"
    variant="secondary"
  />
</Story>

<Story name="Danger">
  <IconButton
    icon="trash-can-outline"
    label="Delete object"
    variant="danger"
  />
</Story>

<Story name="Disabled">
  <IconButton
    icon="refresh"
    label="Restart object"
    disabled
  />
</Story>

<Story name="Progress">
  <IconButton
    icon="refresh"
    progress="indeterminate"
    label="Restart object"
  />
</Story>
