<script>
    import RibbonBar from "../RibbonBar.svelte";

    export let url;

    function clicked() {
        createModal()
    }

    let container
    let modal = null

    const getContainerPosition = () => container.getBoundingClientRect();

    function closeModal() {
        modal.$destroy();
        modal = null;
    }

    function createModal() {
        if (modal) {
            closeModal()
        }

        const {top, left, height, width} = getContainerPosition();

        let position = {
            from: "top",
            top,
            left,
            height,
            width,
        };

        // Create a new modal in body - this is the only way to get the modal to be over the AG Grid
        modal = new RibbonBar({
            target: document.querySelector("body"),
            props: {
                modalOptions: {
                    position,
                    closeModal
                },
            },
        });

    }

</script>
<div class="image-cell-container" bind:this={container}>
    <img src={url} title={url} on:click={clicked}/>
</div>

<style>
    .image-cell-container {
        display: flex;
        height: 100%;
        overflow: visible;
    }

    :global(.image-cell) {
        /*display: flex;*/
        height: 100%;
        /*overflow: visible;*/
    }
</style>