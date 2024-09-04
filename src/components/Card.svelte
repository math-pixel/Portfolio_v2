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

<a href={href} class=" absolute w-[40%] bg-red-400">
	<img src={thumbnail} alt="" class=" absolute bottom-0 left-0 w-1/3 h-[120%]">
	<h2 class="">{title}</h2>
	<p>{description}</p>
	{#each techno as currentTechno}
		<p>{currentTechno.img}</p>
		<h1>{currentTechno.name}</h1>
    {/each}
</a >