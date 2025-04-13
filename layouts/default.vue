<template>
<div> 
    <PreLoader/>
    <Header/>
    <NuxtPage />
    <Footer/>
</div> 
</template>

<script setup>
const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 1500)
})

useHead({
  bodyAttrs: computed(() => ({
    id: 'home',
    class: loading.value ? 'home preloader-active' : 'home loaded',
    style: 'background-image: url(/img/bg-body.svg); background-size: cover;'
  }))
})
</script>