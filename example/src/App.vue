<template>
  <div>
    <VAButton @click="onClick" type="primary">button</VAButton>
  </div>
</template>

<script lang="ts" setup>
import { VAButton } from "vafar";
const onClick = () => {
  console.log("click");
};
</script>
