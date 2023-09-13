<script>
    let cardsNumber = 20;

</script>
<div id="cards" class="px-10 flex justify-center items-center mb-10">
    <div class="flex flex-wrap justify-between gap-5">
    {#each Array(cardsNumber) as _, i}
        <div class="h-96 w-72 bg-gray-300">
            Card
        </div>
    {/each}
    </div>
</div>