<template>
  <div
    class="entry-container p-2"
    @click="$router.push({ name: 'entry', params: { id: entry.id } })"
  >
    <div class="entry-date d-flex">
      <span class="date">{{ entry.date }}</span>
    </div>
    <div class="entry-description">
      <p>
        {{ truncatedText }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Entry",
  props: {
    entry: {
      type: Object,
      required: true,
    },
  },
  computed: {
    truncatedText() {
      let text = this.entry.text;
      text = text.replace(/<[^>]*>?/gm, "");
      return text.length > 100 ? text.substr(0, 100) + "..." : text;
    }
  }
};
</script>

<style lang="scss" scoped>
.entry-container {
  border-radius: 10px;
  background-color: #fff;
  transition: 0.2s all ease-in-out;

  &:nth-child(odd) {
    margin: 10px 0;
  }

  &:hover {
    cursor: pointer;
    background-color: #dfdfdf;
  }

  .entry-date {
    .date {
      font-size: 0.8rem;
      color: #7f8c8d;
    }
  }

  .entry-description {
    font-size: 1rem;
    color: #000;

    p {
      margin: 0;
    }
  }
}
</style>