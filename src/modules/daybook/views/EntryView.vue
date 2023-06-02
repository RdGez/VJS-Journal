<template>
  <div class="entry-view-limit">
    <div class="entry-title d-flex justify-content-between align-items-center p-3">
      <div class="">
        <span class="date">{{ entry.date }}</span>
      </div>
      <div class="button-menu">
        <button class="btn btn-primary">
          Upload
          <img src="@/assets/upload.svg" alt="Upload" />
        </button>
        <button class="btn btn-danger btn-delete ms-3">
          <img class="icon" src="@/assets/trash.svg" alt="Delete" />
        </button>
      </div>
    </div>
    <div class="d-flex flex-column px-3 h-50">
      <QuillEditor 
        placeholder="What happened today?..." 
        toolbar="essential" theme="snow" 
        v-model:content="entry.text"
        contentType="html" />
      <img src="https://w.wallhaven.cc/full/m3/wallhaven-m3wrq8.png" alt="Entry-Picture" class="img-thumbnail" />
    </div>
  </div>
  <Fab @on:click="saveEntry" />
</template>

<script>
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { defineAsyncComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import { QuillEditor, Quill } from "@vueup/vue-quill";

export default {
  props: {
    id: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      entry: '',
    }
  },
  created() {
    this.loadEntry();
  },
  components: {
    QuillEditor,
    Fab: defineAsyncComponent(() => import("../components/Fab.vue")),
  },
  computed: {
    ...mapGetters("journal", ["getEntryById"]),
  },
  methods: {
    ...mapActions("journal", ["updateEntry", "addEntry"]),
    loadEntry() {
      let entry;
      if (this.id === 'new') {
        entry = {
          date: new Date().toDateString(),
          text: "<p></p>",
        }
      } else {
        entry = this.getEntryById(this.id);
        if (!entry) return this.$router.push({ name: "no-entry" })
      }

      this.entry = entry;
    },
    async saveEntry() {
      if( this.entry.id ) {
        await this.updateEntry(this.entry);
      } else {
        const id = await this.addEntry(this.entry);
        this.$router.push({ name: 'entry', params: { id } })
      }
    },
  },
  watch: {
    id() {
      this.loadEntry();
    }
  }
};
</script>

<style lang="scss" scoped>
.entry-view-limit {
  height: 100vh;
  height: calc(100vh - 65px);
  overflow-y: scroll;
}

.entry-title {
  .btn-delete {
    position: relative;
    border-radius: 100%;
    height: 40px;
    width: 40px;
  }

  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .date {
    font-size: 0.9rem;
    color: #7f8c8d;
  }
}
</style>