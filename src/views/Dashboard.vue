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
import firebase from "@firebase/app";
import "@firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAzugDwrepHZdvszOSFyGRga3IEg1qV-3c",
  authDomain: "rfid-database-8c0f2.firebaseapp.com",
  databaseURL: "https://rfid-database-8c0f2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "rfid-database-8c0f2",
  storageBucket: "rfid-database-8c0f2.appspot.com",
  messagingSenderId: "509413991821",
  appId: "1:509413991821:web:fef2ffd91ade42f62fc9c4",
  measurementId: "G-LMGX06N1SW"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref('RFID');
const itemref = ref(db,'RFID');
export default defineComponent({
  name: "main-dashboard",
  components: {
    Chart1,
    Table13
},
mounted() {
  console.log(itemref);
},
  setup() {
    return {
      getAssetPath,
    };
  },
});
</script>
