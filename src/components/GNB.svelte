<script lang="ts">
	import { css } from "@style/css";

	const links: { href: string; label: string }[] = [
		{ href: "/log", label: "Home" },
		{ href: "/log/about", label: "About" },
		{ href: "/log/rss", label: "RSS" },
	];

	const navStyle = css({
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		padding: "1rem",
		maxWidth: "1280px",
		margin: "0 auto",
		backgroundColor: "amber.200",
	});

	const ulStyle = css({
		listStyle: "none",
		display: "flex",
		gap: "1rem",
	});
</script>

<nav class={navStyle}>
	<ul class={ulStyle}>
		{#each links as link}
			<li><a href={link.href}>{link.label}</a></li>
		{/each}
	</ul>
</nav>
