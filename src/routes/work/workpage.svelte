<script>
  import index from '@lib/work/workindex'
  import Media from '@lib/components/workmedia.svelte'
</script>

<section class="work">
  {#each index as work}
    <article id={encodeURI(work.title)}>
      <Media 
        src={work.media}
        alt={"Picture of " + work.title + " by Leevi Vahvelainen for " + work.paragraphs[work.paragraphs.length-1]}
      />
      <div class="info">
        <h3>{work.title}</h3>
        {#each work.paragraphs as paragraph}
          <p>{paragraph}</p>
        {/each}

        {#if work.full_page }
          <a href={work.full_page} >Read More</a>
        {/if}
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
  article, a {
    display: flex;
    margin-bottom: 8em;
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
    section {
      padding: 0;
    }
    article {
      flex-direction: column;
    }
    div {
      padding: 0 1em;
    }
  }


</style>