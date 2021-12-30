<template>
  <div>
    <p>count:{{ count }}</p>
    <button @click="add">增加</button>
    <button @click="reduce">减少</button>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  name: 'compositionApiComponent',
  setup() {
    const count = ref(0)
    const add = () => count.value++
    const reduce = () => count.value--
    return {
      count,
      add,
      reduce
    }
  }
}
</script>
