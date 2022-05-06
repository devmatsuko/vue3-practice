<script setup lang="ts">
import Card from './Card.vue';
import Badge from './Badge.vue';
</script>

<template>
  <Card class="reservation-card">
    <span>John Wick</span>
    <Badge class="vip-badge">
      <span>VIP</span>
    </Badge>
  </Card>
  <Card class="reservation-card">
    <span>Shuya Inada</span>
    <Badge class="normal-badge">
      <span>normal</span>
    </Badge>
  </Card>
  <Card class="reservation-card">
    <span>Silvers Leily</span>
    <Badge class="vip-badge">
      <span>VIP</span>
    </Badge>
  </Card>
</template>

<style scoped>


.vip-badge {
  background-color: #810036;
  color: white;
}

.normal-badge {
  background-color: #002c8a;
  color: white;
}

.reservation-card {
  width: 400px;
  height: 60px;
  background-color: rgb(255, 212, 147);
  display: flex;
  flex-direction: space-between;
  align-items: center;
  margin-bottom: 8px;
}

</style>