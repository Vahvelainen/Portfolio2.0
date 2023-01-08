<script>
  export let src
  export let alt
  export let grid = false;

  const theClass = grid ? 'grid' : '';

  const mediaType = urlFileExtension(src);

  function urlFileExtension(url) {
    return url.substring(url.lastIndexOf('.')+1, url.length) || url;
  };
</script>

  {#if mediaType === 'jpg' || mediaType === 'png'}
    <img src={src} alt={alt} data-fancybox='wrk' class={theClass} >
  {:else if mediaType === 'mp4' }
    <video autoplay muted loop src={src} alt={alt} class={theClass}></video>
  {:else }
    <embed src={src} class={theClass}>
  {/if}

  <style>
    .grid{
      width: 100%;
      height: 100%;
      margin: 0;
    }
    embed, img, video {
      object-fit: cover;
      height: 30em;
      margin-right: 4em;
      max-width: 60vw;
    }
    @media all and (max-width: 700px) {
      .grid {
        min-height: 100%;
        max-height: 100%;
        width: 100%;
        margin: 0;
      }
      embed, img, video {
        max-width: 100%;
        height: unset;
        min-height: 100vw;
        max-height: 60%;
        margin: 0 0 3em;
      }
    }
  </style>