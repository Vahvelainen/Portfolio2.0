<script>
  export let src
  export let alt

  const mediaType = urlFileExtension(src);

  function urlFileExtension(url) {
    return url.substring(url.lastIndexOf('.')+1, url.length) || url;
  };
</script>

  {#if mediaType === 'jpg' || mediaType === 'png'}
    <img src={src} alt={alt} data-fancybox='wrk'>
  {:else if mediaType === 'mp4' }
    <video autoplay muted loop src={src} alt={alt}></video>
  {:else }
    <embed src={src}>
  {/if}

  <style>
    embed, img, video {
      object-fit: cover;
      height: 30em;
      margin-right: 4em;
      max-width: 60vw;
    }
  </style>