<template> <!---HTML-->
  <div>
    <div class="mt-15">
      <Chart1 :height="400"></Chart1>
    </div>
    <div class="mt-5">
      <Table13/>
    </div>
  </div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import Chart1 from "@/components/widgets/charts/Widget1.vue"
import Table13 from "@/components/widgets/tables/Widget13.vue"

export default defineComponent({
  name: "main-dashboard",
  components: {
    Chart1,
    Table13
},
  setup() {
    return {
      getAssetPath,
    };
  },
});
</script>
