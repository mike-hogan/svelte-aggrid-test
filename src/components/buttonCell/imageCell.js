import ImageCellComponent from "./ImageCellComponent.svelte";

export default class ImageCell {
  init(params) {
    this.params = params;

    this.eGui = document.createElement("div");
    this.eGui.classList.add("image-cell");

    new ImageCellComponent({
      target: this.eGui,
      props: {
        url:params.value
      },
    });
  }

  getGui() {
    return this.eGui;
  }
}
