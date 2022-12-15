<script>
  export let modalOptions = {
    closeModal,
    position: {
      from: "top",
      top: 0,
      left: 0,
      height: 0,
      width: 0,
    },
  };

  $: position = modalOptions.position;
</script>

<div
  style="--top:{position.top}px;  --left: {position.left}px; --container-width: {position.width}px; --container-height: {position.height}px;"
  class="from-{position.from} container"
>
  <div class="ribbon-bar">
    <button on:click={modalOptions.closeModal}>View</button>
    <button on:click={modalOptions.closeModal}>Delete</button>
    <button on:click={modalOptions.closeModal}>Close</button>
  </div>
</div>
π
<style>
  .container {
    background: white;
    padding: 1em;
    border: 1px solid #ccc;
    position: fixed;


    left: var(--left);
    top: var(--top);
  }

  /* Adjust the position of the modal based on the position.from prop */
  div.from-left {
    transform: translateX(calc(var(--container-width) * -1));
  }

  div.from-right {
    transform: translateX(calc(var(--container-width)));
  }

  div.from-top {
    transform: translateY(-100%);
  }

  div.from-bottom {
    transform: translateY(calc(var(--container-height)));
  }
</style>
