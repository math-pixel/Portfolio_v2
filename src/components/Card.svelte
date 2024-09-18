<script lang="ts">

interface PropsComponent {
    title: string;
    description: string;
    href: string;
    thumbnail: string;
    techno : Array<{img : string}>;
}

export let title: PropsComponent['title'];
export let description: PropsComponent['description'];
export let href: PropsComponent['href'];
export let thumbnail: PropsComponent['thumbnail'];
export let techno :PropsComponent['techno'];

</script>

<a href={href} class="relative  w-[45%] bg-[#D6ECFF] overflow-visible rounded-[20px] p-4 pt-7 m-2">
    
    <div class=" flex w-full h-[45vh] overflow-hidden justify-around">
        <img src={thumbnail} alt="" class=" h-[100%] w-[85%] rounded-[10px] object-cover ">

        <div class=" w-[10%] h-[90%] flex flex-col justify-start items-center overflow-visible">
            {#each techno as currentTechno, index}
                {#if index < 4}
                    <img alt=" {currentTechno.img}of techno" src={currentTechno.img} class="w-[100%] rounded-[10px] mb-4"/>
                {/if}
            {/each}
        </div>
    </div>

    <div class=" flex flex-col w-full overflow-hidden max-w-[90%] m-[5%] ml-[1%]">

        <h2 class=" top-[10%] left-[40%] font-semibold text-4xl">{title}</h2>
        <p class=" top-[25%] left-[40%] font-normal text-lg ">{description}</p>
    </div>



</a >