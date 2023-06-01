<template>
  <div class="entry-view-limit">
    <div
      class="entry-title d-flex justify-content-between align-items-center p-3"
    >
      <div class="">
        <span class="date">06 Mayo 2023, Sabado</span>
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
      <QuillEditor theme="snow" />
      <img
        src="https://w.wallhaven.cc/full/m3/wallhaven-m3wrq8.png"
        alt="Entry-Picture"
        class="img-thumbnail"
      />
    </div>
  </div>
  <Fab />
</template>

<script>
import { defineAsyncComponent } from "vue";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

export default {
  components: {
    QuillEditor,
    Fab: defineAsyncComponent(() => import("../components/Fab.vue")),
  },
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