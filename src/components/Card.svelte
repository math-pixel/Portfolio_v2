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

<a href={href} class="relative w-[40%] h-[40%] bg-[#D6ECFF] overflow-visible rounded-[20px]">
    
    <img src={thumbnail} alt="" class=" absolute bottom-[12px] left-[12px] h-[105%] rounded-[10px]">

    <h2 class="absolute top-[10%] left-[40%] font-semibold text-4xl">{title}</h2>
    <p class="absolute top-[20%] left-[40%] font-normal text-lg ">{description}</p>

    <div class=" absolute -bottom-[5%] right-[5%] w-[40%] h-[20%] flex justify-around items-center">
        {#each techno as currentTechno}
            <img alt="" src={currentTechno.img} class="w-[20%]"/>
        {/each}
    </div>
</a >