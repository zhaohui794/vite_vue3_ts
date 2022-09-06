<script setup lang="ts">
    import { ref } from 'vue'
    import { NButton } from "naive-ui"
    
    defineProps({
      msg: String
    })
    
    const count = ref(0)
</script>
    
<template>
    <div>
        <n-button>naive-ui</n-button>

    </div>

</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
