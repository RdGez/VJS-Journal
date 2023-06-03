<template>
  <div class="entry-view-limit">
    <div class="entry-title d-flex justify-content-between align-items-center p-3">
      <div class="">
        <span class="date">{{ entry.date }}</span>
      </div>
      <div class="button-menu">
        <input
          type="file" 
          ref="fileInput"
          v-show="false" 
          accept="image/png, image/jpeg, image/jpg, image/gif"
          @change="onSelectedImage"
        />
        <button @click="onSelectImage" class="btn btn-primary">
          Upload
          <img src="@/assets/upload.svg" alt="Upload" />
        </button>
        <button v-if="entry.id" @click="onDeleteEntry" class="btn btn-danger btn-delete ms-3">
          <img class="icon" src="@/assets/trash.svg" alt="Delete" />
        </button>
      </div>
    </div>
    <div class="d-flex flex-column px-3 view h-full">
      <QuillEditor 
        placeholder="What happened today?..."
        toolbar="essential" theme="snow" 
        v-model:content="entry.text"
        contentType="html" />
      <img v-if="entry.picture" :src="entry.picture" alt="Entry-Picture" class="img-thumbnail" />
      <img v-if="localImage && !entry.picture" :src="localImage" alt="Entry-Picture" class="img-thumbnail" />
    </div>
  </div>
  <Fab @on:click="saveEntry" />
</template>

<script>
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import Swal from "sweetalert2";
import { defineAsyncComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import { QuillEditor } from "@vueup/vue-quill";
import { toastMixin } from "../../../shared/helpers/swal.toast";
import uploadImage from "../../../shared/helpers/upload.cloudinary";

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
      file: null,
      localImage: null,
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
    ...mapActions("journal", ["updateEntry", "addEntry", "deleteEntry"]),
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
      if (this.file) githis.entry.picture = await uploadImage(this.file);

      if( this.entry.id ) {
        await this.updateEntry(this.entry);
      } else {
        const id = await this.addEntry(this.entry);
        this.$router.push({ name: 'entry', params: { id } })
      }

      toastMixin.fire({
        icon: "success",
        title: "Saved successfully!",
      });
    },
    async onDeleteEntry() {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        await this.deleteEntry(this.entry.id);
        this.$router.push({ name: "no-entry" });
        toastMixin.fire({
          icon: "success",
          title: "Entry deleted successfully!",
        });
      }
    },
    onSelectedImage( $event ) {
      const file = $event.target.files[0]
      if (!file) return

      this.file = file

      const fr = new FileReader()
      fr.onload = () => this.localImage = fr.result
      fr.readAsDataURL(file)
    },
    onSelectImage() {
      this.$refs.fileInput.click()
    }
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

.view {
  height: calc(100vh - 120px);
}
</style>