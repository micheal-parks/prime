<script lang="ts">
  import { Tabs } from '@viamrobotics/prime-core';

  let tab = 'Tab 1';
</script>

<div class="flex w-full flex-col gap-4">
  <Tabs
    cx="bg-cyan-500 w-full"
    tabs={['Tab 1', 'Tab 2', 'Tab 3']}
    selected={tab}
    on:input={(event) => {
      tab = event.detail.value;
    }}
  />
  <p>Hello From {tab}!</p>
</div>
