<script setup lang="ts">
import {ref} from 'vue'
import Card from './Card.vue';
import Badge from './Badge.vue';
import MosaicReservation from './MosaicReservation.vue';
import ReservationList from './ReservationList.vue';

const isListVisible = ref<boolean>(true)

const onClickButton = () => {
  isListVisible.value = !isListVisible.value
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
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
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