<script setup lang="ts">
  import { ref, reactive, computed, watch, toRefs, onBeforeMount, onMounted, onUpdated} from 'vue'

  // リアクティブな値にする必要がある
  const itemName1 = ref<string>('Desk')
  const itemName2 = 'Bike'

  const item1 = reactive({
    name: 'Desc',
    price: 40000
  })

  const price1 = 40000
  const price2 = 20000

  const url1 = 'https://www.yahoo.co.jp/'
  const url2 = 'https://twitter.com/'

  const buy = (itemName :string) => {
    alert('Are you sure to buy ' + itemName + '?')
  }

  const clear = () => {
    item1.name = ''
    item1.price = 0
  }

  const budget = 50000

  // const priceLabel = computed(() => {
  //   if (item1.price > budget) {
  //     return 'too expensive...'
  //   } else {
  //     return item1.price + 'yen'
  //   }
  // })

  const priceLabel = ref<string>(item1.price + 'yen');
  // リアクティブなオブジェクトの中身の変数はリアクティブじゃない
  // のでオブジェクトの中身の変数もリアクティブ化する
  const { price } = toRefs(item1)

  watch(price,() => {
    if (item1.price > budget) {
      priceLabel.value = 'too expensive...'
    } else {
      priceLabel.value = item1.price + 'yen'
    }
  })

</script>

<template>
  <div class="container">
    <h1>Payment</h1>
    <input v-model="item1.name">
    <input v-model="item1.price">
    <button v-on:click="clear">Clear</button>
    <div class="payment">
      <label>{{ item1.name }}</label>
      <label> {{ priceLabel }}</label>
      <!-- <label>{{ item1.price }} yen</label> -->
      <a v-bind:href="url1">bought at ...</a>
      <button v-on:click="buy(item1.name)">BUY</button>
    </div>
    <div class="payment">
      <label>{{ itemName2 }}</label>
      <label>{{ price2 }} yen</label>
      <a v-bind:href="url2">bought at ...</a>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.payment {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  width: 400px;
  background-color: aliceblue;
  margin-bottom: 8px;
}

label {
  font-size: 20px;
  font-weight: bold;
}

input {
  margin-bottom: 8px;
}
</style>