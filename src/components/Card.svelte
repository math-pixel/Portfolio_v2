<script lang="ts">

interface PropsComponent {
    title: string;
    description: string;
    href: string;
    thumbnail: string;
    techno : Array<{img : string, name : string}>;
}

export let title: PropsComponent['title'];
export let description: PropsComponent['description'];
export let href: PropsComponent['href'];
export let thumbnail: PropsComponent['thumbnail'];
export let techno :PropsComponent['techno'];

</script>

<a href={href} class="relative w-[40%] h-[40%] bg-[#D6ECFF] overflow-visible rounded-[20px]">
    <img src={thumbnail} alt="" class=" absolute bottom-[12px] left-[12px] h-[105%] rounded-[10px]">
    <h2 class="absolute top-[10%] left-[35%] font-semibold text-4xl">{title}</h2>
    <p class="absolute top-[20%] left-[35%] font-normal text-lg ">{description}</p>

    <div class=" absolute bottom-0 right-0 bg-slate-500 w-[40%] h-[20%] flex">
        {#each techno as currentTechno}
            <p>{currentTechno.img}</p>
            <h1>{currentTechno.name}</h1>
        {/each}
    </div>
</a >