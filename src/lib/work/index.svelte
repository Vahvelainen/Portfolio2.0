<script>
  import index from './workindex'
</script>

<section class="work">
  {#each index as work}
    <article>
      <div class="image" style="background-image: url({work.media});" ></div>
      <div class="info">
        <h3>{work.title}</h3>
        <p>{work.paragraphs[0]}</p>
        <p>{work.paragraphs[work.paragraphs.length-1]}</p>
      </div>
    </article>
  {/each}
</section>

<style>
  .work {
    display: flex;
    flex-wrap: wrap;
  }

  article {
    width: 33%;
    position: relative;
    overflow: hidden;
    aspect-ratio: 1;
  }

  .image {
    width: 100%;
    aspect-ratio: 1;
    background-size: cover;
    background-position: center;
  }

  .info {
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
    aspect-ratio: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2em;
    background-color: rgba(0,0,0,0.8);
    color: white;
    transition: 100ms ease-out;

  }

  article:hover .image {
    transform: scale(1.2);
    transition: 100ms linear;
  }

  article:hover .info {
    opacity: 1;
  }

</style>