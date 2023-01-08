<svelte:head>
  {#if !import.meta.env.DEV}
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-P8LTLNZ4MJ"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-P8LTLNZ4MJ');
    </script>
  {/if}
</svelte:head>

<script>
  import '../app.css'
  import Nav from '@lib/navbar.svelte'
  import Footer from '@lib/footer.svelte'
</script>

<Nav/>
<main>
  <slot/>
</main>
<Footer/>