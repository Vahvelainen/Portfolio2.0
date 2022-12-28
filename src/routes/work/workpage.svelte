<script>
  import index from '@lib/work/workindex'
</script>

<section class="work">
  {#each index as work}
    <article>
      <img
        src={work.media}
        alt={"Picture of " + work.title + " by Leevi Vahvelainen for " + work.paragraphs[work.paragraphs.length-1]}
      >
      <div class="info">
        <h3>{work.title}</h3>
        {#each work.paragraphs as paragraph}
          <p>{paragraph}</p>
        {/each}
      </div>
    </article>
  {/each}
</section>

<style>
  img {
    max-width: 20em;
  }
  .work {
    display: flex;
    flex-direction: column;
    background-color: rgb(245, 245, 245);
    align-items: center;
  }
  .work-intro {
    text-align: center;
    padding-top: 4em;
    padding-bottom: 2em;
    width: 100%;
  }
  article, a {
    display: flex;
    margin-bottom: 8em;
  }
  embed, img, video {
    object-fit: cover;
    height: 30em;
    margin-right: 4em;
    max-width: 60vw;
  }
  h3 {
    font-weight: 700;
  }
  p {
    max-width: 420px;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  @media all and (max-width: 700px) {
    article {
      flex-direction: column;
    }
    embed, img, video {
      max-width: 100%;
      height: unset;
      min-height: 100vw;
      max-height: 60%;
      margin: 0 0 3em;
    }
    div {
      padding: 0 1em;
    }
  }


</style>