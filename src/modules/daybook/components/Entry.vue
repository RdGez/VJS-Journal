<template>
  <div class="entry-container p-2">
    <div class="entry-date d-flex">
      <span class="date">6 Mayo 2023, Sabado</span>
    </div>
    <div class="entry-description">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
        corrupti autem in ut, vero, consequatur assumenda officiis odit voluptas
        id, voluptatibus saepe alias. Repellendus magnam eum ratione minus,
        perspiciatis atque.
      </p>
    </div>
  </div>
</template>

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