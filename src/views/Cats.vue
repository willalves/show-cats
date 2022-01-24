<template>
  <div id="page-cats" class="page cats" @click="categoryDropdown = false">
    <div class="wrapper h-full">
      <!-- Search and filter section -->
      <div class="header py-8 h-20 fixed top-16 w-full z-10 bg-white" :class="[ windowScroll > 0 ? 'shadow' : '']">
        <div class="search h-full flex justify-center items-center px-4">
          <input
            type="text"
            class="border-2 rounded-full px-4 mr-4 h-10 lg:h-12 w-2/4 lg:w-1/2 hover:border-indigo-500 focus:border-indigo-700 focus:ring-0 focus:outline-none"
            placeholder="Search by name..."
            v-model="searchInput"
          />
          <button
            id="category-button"
            type="button"
            class="text-gray-400 bg-white text-sm px-4 h-10 lg:h-12 lg:mt-0 flex items-center justify-center border-2 rounded-full hover:border-indigo-700 focus:text-indigo-700 focus:border-indigo-700 focus:ring-0 focus:outline-none"
            @click.stop
            @click="categoryDropdown = !categoryDropdown"
          >
            {{ selectedCategory ? selectedCategory : 'Filter by country' }}
            <div
              class="arrow-down ml-2"
              :class="[ categoryDropdown ? 'transform rotate-180' : '']"
            >
              <svg width="15" height="10" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.62078 7.06394C5.32392 7.50924 4.66957 7.50924 4.37271 7.06394L0.440761 1.16603C0.108483 0.667609 0.465777 0 1.0648 0L8.92869 0C9.52771 0 9.88501 0.667609 9.55273 1.16603L5.62078 7.06394Z" />
              </svg>
            </div>
            <div
              class="origin-top-right absolute top-20 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              v-if="categoryDropdown"
            >
              <a class="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100" @click="selectedCategory = null">All</a>
              <div v-for="(catCategory, i) in getCategories" :key="i" class="w-full">
                <a class="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100" @click="selectCategory(catCategory)">{{ catCategory }}</a>
              </div>
            </div>
          </button>
        </div>
      </div>

      <!-- Cats infos section -->
      <div class="content px-4 lg:px-6 py-8 mt-16">
        <div
          v-for="cat in searchCat"
          :key="cat.id"
          class="all-cats w-full h-full"
        >
          <CatCard :cat="cat" />
        </div>
      </div>

      <!-- Scroll to top button -->
      <div class="scroll-top animate-bounce duration-75 bg-white fixed bottom-6 right-4 w-12 h-12 rounded-full shadow hover:shadow-lg" title="Back to top" v-if="windowScroll > 150">
        <a class="w-full h-full rounded-full flex items-center justify-center transform rotate-180 cursor-pointer" @click="scrollTop">
          <svg width="15" height="10" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.62078 7.06394C5.32392 7.50924 4.66957 7.50924 4.37271 7.06394L0.440761 1.16603C0.108483 0.667609 0.465777 0 1.0648 0L8.92869 0C9.52771 0 9.88501 0.667609 9.55273 1.16603L5.62078 7.06394Z" fill="#1F2B37"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import CatCard from '@/components/CatCard'

export default {
  name: 'Home',
  components: {
    CatCard
  },
  data() {
    return {
      fetch: {
        cats: null,
      },
      windowScroll: null,
      searchInput: null,
      categoryDropdown: false,
      selectedCategory: null
    }
  },
  computed: {
    searchCat() {
      // Filter the cats object from the search input value or from the selected country filter
      if (this.searchInput) {
        const filteredByName = this.fetch.cats.filter(cat => cat.name.toLowerCase().includes(this.searchInput.toLowerCase()))
        return filteredByName
      }
      if (this.selectedCategory) {
        const filteredByCountry = this.fetch.cats.filter(cat => cat.origin.includes(this.selectedCategory))
        return filteredByCountry
      }
      return this.fetch.cats
    },
    getCategories() {
      // Set country filter list
      var categories = new Set()
      for (let i = 0; i < this.fetch.cats.length; i++) {
        const cat = this.fetch.cats[i];
        categories.add(cat.origin)
      }
      return categories
    }
  },
  methods: {
    selectCategory(country) {
      // Get selected country from country filter
      this.selectedCategory = country
    },
    async fetchCats() {
      // Fetch API and set response into fetch.cats data
      try {
        let response = await this.axios.get('/breeds', { params: { limit:20 } } )
        this.fetch.cats = response.data
      } catch(err) {
        console.log(err)
      }
    },
    onScroll() {
      // Set scrollY position into windowScroll data
      this.windowScroll = window.top.scrollY
    },
    scrollTop() {
      // Action to scroll to top for .scroll-top button
      window.scrollTo({top: 0, behavior: 'smooth'})
    }
  },
  created() {
    this.fetchCats()
  },
  mounted() {
    // Create event "scroll" to call function onScroll()
    window.addEventListener("scroll", this.onScroll)
  },
  beforeUnmount() {
    // Remove event "scroll" before unmount view
    window.removeEventListener("scroll", this.onScroll)
  }
}
</script>
