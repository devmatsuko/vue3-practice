<script setup lang="ts">
import {ref} from 'vue'
import Card from './Card.vue';
import Badge from './Badge.vue';
import MosaicReservation from './MosaicReservation.vue';
import ReservationList from './ReservationList.vue';

const isListVisible = ref<boolean>(true)
const isDialogOpen = ref<boolean>(true)
const onClickButton = () => {
  // isListVisible.value = !isListVisible.value
  isDialogOpen.value = !isDialogOpen.value
}

const getContent = () => {
  if(isListVisible.value) {
    return ReservationList
  }else{
    return MosaicReservation
  }
}
</script>

<template>
  <div class="container">
    <Card class="menu-card">
      <span>Badges</span>
      <div class="badges">
        <Badge class="vip-badge">
          <span>VIP</span>
        </Badge>
        <Badge class="normal-badge">
          <span>NORMAL</span>
        </Badge>
      </div>
    </Card>
    <component :is="getContent()"></component>
    <!-- <div v-if="isListVisible">
      <ReservationList></ReservationList>
    </div>
    <div v-else>
      <MosaicReservation></MosaicReservation>
    </div> -->

    <button @click="onClickButton">Change</button>
    <teleport to="body">
      <dialog class="dialog" :open="isDialogOpen">
        <span>Dialog</span>
      </dialog>
    </teleport>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dialog {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100px;
  width: 400px;
  margin: auto;
  background-color: aliceblue;
}

.menu-card {
  width: 300px;
  height: 80px;
  background-color: #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
}



</style>