<template>
  <div>
    <YwButton @click="onClick" type="primary">button</YwButton>
  </div>
</template>

<script lang="ts" setup>
import { YwButton } from "afar-ui";
const onClick = () => {
  console.log("click");
};
</script>

