<template>
  <div class="cat-card w-full h-auto lg:h-1/3 border rounded-md mb-6 shadow flex flex-col lg:flex-row">
    <img :src="cat.image.url" class="h-full w-36 lg:w-56 rounded-tl-md lg:rounded-bl-md">
    <div class="cat-info w-full">
      <div class="info-header flex flex-col lg:flex-row">
        <p class="cat-name m-2 lg:m-4 text-2xl">{{ cat.name }}</p>
        <p class="cat-origin w-max mb-2 lg:my-4 mx-2 px-2 flex items-center text-xs text-indigo-700 bg-indigo-100 rounded">From {{ cat.origin }}</p>
        <p class="cat-temperament lg:my-4 mx-2 px-2 flex items-center text-xs text-indigo-700 bg-indigo-100 rounded">Temperament: {{ cat.temperament }}</p>
      </div>
      <div class="info-desc">
        <p class="cat-desc p-4">{{ cat.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['cat']
}
</script>

<style lang="scss">
.cat-card {
  img {
    min-height: 168px;
    max-height: 168px;
    min-width: 224px;
    max-width: 224px;
    object-fit: cover;
  }
}
</style>