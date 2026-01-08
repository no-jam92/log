<script lang="ts">
	const links: { href: string; label: string }[] = [
		{ href: "/log", label: "Home" },
		{ href: "/log/about", label: "About" },
		{ href: "/log/rss", label: "RSS" },
	];
</script>

<nav>
	<ul>
		{#each links as link}
			<li><a href={link.href}>{link.label}</a></li>
		{/each}
	</ul>
</nav>
