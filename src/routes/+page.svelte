<script>
    import {Grid} from "ag-grid-community";
    import style1 from "ag-grid-community/styles//ag-grid.css";
    import style2 from "ag-grid-community/styles//ag-theme-alpine.css";


    import {onMount} from "svelte";

    import ImageCell from "../components/buttonCell/imageCell.js";

    // Grid

    var gridOptions = {
        defaultColDef: {
            sortable: true,
            resizable: true,
            floatingFilter: true,
            width: 120
        },
        columnDefs: [
            {headerName: "Make", field: "make"},
            {headerName: "Model", field: "model"},
            {headerName: "Price", field: "price"},
            {headerName: "Image", field: "image", cellRenderer: ImageCell},
        ],
        rowData: [
            {
                make: "Toyota",
                model: "Celica",
                price: 35000,
                image: "https://www.i2symbol.com/images/text-symbols/1-symbol.png"
            },
            {
                make: "Ford",
                model: "Mondeo",
                price: 32000,
                image: "https://www.i2symbol.com/images/text-symbols/2-symbol.png"
            },
            {
                make: "Porsche",
                model: "Boxster",
                price: 72000,
                image: "https://www.i2symbol.com/images/text-symbols/3-symbol.png"
            },
            {
                make: "Toyota",
                model: "Celica",
                price: 35000,
                image: "https://www.i2symbol.com/images/text-symbols/4-symbol.png"
            },
            {
                make: "Ford",
                model: "Mondeo",
                price: 32000,
                image: "https://www.i2symbol.com/images/text-symbols/5-symbol.png"
            },
            {
                make: "Porsche",
                model: "Boxster",
                price: 72000,
                image: "https://www.i2symbol.com/images/text-symbols/6-symbol.png"
            },
        ],
    };

    let eGridDiv;

    onMount(() => {
        new Grid(eGridDiv, gridOptions)

        gridOptions.api.sizeColumnsToFit(); // resize columns to fit the grid width

        // resize again if the window is resized
        window.addEventListener("resize", () => gridOptions.api.sizeColumnsToFit());
    });
</script>

<main>
    <div bind:this={eGridDiv} id="myGrid" class="ag-theme-alpine"/>
</main>
<style>
    #myGrid {
        width: 100%;
        height: 500px;
    }

    main {
        margin-top: 50px;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }
</style>
