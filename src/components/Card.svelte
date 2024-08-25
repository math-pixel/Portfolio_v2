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

<a href={href}>
	<img src={thumbnail} alt="">
	<h2>{title}</h2>
	<p>{description}</p>
	{#each techno as currentTechno}
		<p>{currentTechno.img}</p>
		<h1>{currentTechno.name}</h1>
    {/each}
</a >