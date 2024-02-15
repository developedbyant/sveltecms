<script>
    import clientData from "src/client";
    import Cards from "src/client/components/cards/Cards.svelte";
    import PageTitle from "src/client/components/PageTitle.svelte";
    import Terminal from "src/client/components/Terminal.svelte";
    import HomeHero from "src/client/components/HomeHero.svelte";
</script>

<div class="content">
    <HomeHero />
    <Cards data={clientData.cards}/>
    <PageTitle title="Get started"/>
    <Terminal>npx kitcms@latest</Terminal>
</div>

<style>
    .content{
        max-width: var(--max-width);
        width: 95%;
        margin: auto;
    }
</style>