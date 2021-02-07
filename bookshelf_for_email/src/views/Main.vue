<template>
  <div class="home">
    <h1>Books</h1>
    <div class="book-container">
      <div class="book-box" v-for="book in books" :key="book.id">
        <img :src="book.thumbnail" alt="Random book cover" />
        <div v-if="isEditingId == book.id">
          <input v-model="book.name" :id="`book-edit-${book.id}`" @keydown.enter="updateBookName(book)" />
          <input v-model="book.description"/>
          <input v-model="book.thumbnail"/>
        </div>
        <div v-else @click="setToEditing(book)">
          <h1>{{ book.name }}</h1>
          <h2>{{ book.description }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  components: {},
  data() {
    return {
      editName: {
        newName: "",
      },
      editDescription: {
        newDescription: "",
      },
      editThumbnail: {
        newThumbnail: '',
      },
      books: [
        {
          id: 1,
          name: "Bog 1",
          description: "Dette er bog nummer 1",
          thumbnail:
            "https://cms-assets.tutsplus.com/uploads/users/114/posts/25114/final_image/Final-product.jpg",
        },
        {
          id: 2,
          name: "Bog 2",
          description: "Dette er bog nummer 2",
          thumbnail:
            "https://cdn.pixabay.com/photo/2018/01/03/09/09/book-3057901_960_720.png",
        },
        {
          id: 3,
          name: "Bog 3",
          description: "Dette er bog nummer 3",
          thumbnail:
            "https://dcassetcdn.com/design_img/3399448/136409/136409_18726055_3399448_f2cb2b9d_image.jpg",
        },
        {
          id: 4,
          name: "Bog 4",
          description: "Dette er bog nummer 4",
          thumbnail:
            "https://designcontest.nyc3.digitaloceanspaces.com/data/contests/48333/entries/d963ec29d43c33f8.jpg",
        },
        {
          id: 5,
          name: "Bog 5",
          description: "Dette er bog nummer 5",
          thumbnail:
            "https://s3images.coroflot.com/user_files/individual_files/large_562691_bigq_gv8hmnbq2hcv9nqidnst.jpg",
        },
      ],
      isEditingId: '',
    };
  },
  methods: {
    setToEditing(book) {
      this.isEditingId = book.id;

      setTimeout(()=> {
        document.getElementById(`book-edit-${book.id}`).focus()
      }, 1)
    },
    updateBookName() {
      this.isEditingId = '';

      localStorage.setItem('name', this.editName.newName)
    }
  },
  mounted() {
    const booksObjToString = JSON.stringify(this.books);

    localStorage.setItem("books", booksObjToString);

    this.books = localStorage.getItem("books");

    if (localStorage.books) {
      this.books = JSON.parse(localStorage.books);
    }
  },
  watch: {
    books(newBooks) {
      localStorage.books = JSON.stringify(newBooks);
    },
  },
};
</script>

<style scoped lang="scss">
.book-container {
  display: flex;
  .book-box {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 10px;
    width: 25%;
    margin: 1em;
    text-align: left;
    justify-content: center;

    h1 {
      margin: 0.5em 0 0.5em 0.35em;
      bottom: 1em;
    }

    h2 {
      margin: 0.5em 0 0.5em 0.5em;
      bottom: 1em;
    }

    img {
      margin-left: 12.5%;
      width: 75%;
    }
  }
}
</style>