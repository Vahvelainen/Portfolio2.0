<script>
  //Relacote this file
  import index from './workindex'
  import Media from '../components/workmedia.svelte'
</script>

<section>
  <div class="work">
    {#each index as work}
      <article>
        <a href="/work#{work.title}">
          <div class="media">
            <Media 
              src={work.media}
              alt={"Picture of " + work.title + " by Leevi Vahvelainen for " + work.paragraphs[work.paragraphs.length-1]}
              grid
            />
          </div>
          <div class="info">
            <h3>{work.title}</h3>
            <p class="description">{work.paragraphs[0]}</p>
            <p>{work.paragraphs[work.paragraphs.length-1]}</p>
          </div>
        </a>
      </article>
    {/each}
  </div>
</section>

<style>
  .work {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
  }

  article {
    width: calc(100%/3);
    position: relative;
    overflow: hidden;
    aspect-ratio: 1;
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

  .media {
    height: 100%;;
  }

  article:hover .media {
    transform: scale(1.2);
    transition: 100ms linear;
  }

  article:hover .info {
    opacity: 1;
  }

  @media all and (max-width: 700px) {
    .description {
      display: none;
    }
    article {
      width: 50%
    }
  }
  
  @media all and (max-width: 1200px) {
    section {
      padding: 0;
    }
  }
</style>