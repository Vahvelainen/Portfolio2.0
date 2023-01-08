<script>
  //Relacote this file
  import index from './workindex'
  import Media from '../components/workmedia.svelte'

  //Scroll follow for mobile view
  //Will not work with SSR if ever is turned on
  let ticking = false;
  document.addEventListener('scroll', function() {
    if ( window.innerWidth > 700 ) return
    if (!ticking) {
      window.requestAnimationFrame(function() {
        setOnScrollClass();
        setTimeout(() => {
          ticking = false;
        }, 80);
      });
      ticking = true;
    }
  });

  function setOnScrollClass() {
    const elemnts = document.querySelectorAll('.work > article');
    if (elemnts.length == 0) {
      return;
    }
    const top = elemnts[0].getBoundingClientRect().top;
    const bottom = elemnts[elemnts.length-1].getBoundingClientRect().bottom;
    const height = bottom - top;
    const relativeScroll = - (top - innerHeight / 2 ) / height;
    const i = Math.round( relativeScroll * elemnts.length)
    elemnts.forEach(element => {
      element.classList.remove('on-scroll');
    })
    if ( i >= 0 && i <= elemnts.length - 1 ) {
      elemnts[i].classList.add('on-scroll');
    }
  };


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
    height: 100%;
    transition: 100ms linear;
  }

  @media all and (min-width: 700px) {
    article:hover .media {
      transform: scale(1.2);
    }
    article:hover .info {
      opacity: 1;
    }
  }

  @media all and (max-width: 700px) {
    .description {
      display: none;
    }
    article {
      width: 50%
    }

    article.on-scroll a .media {
      transform: scale(1.2);
    }
    article.on-scroll a .info {
      opacity: 1;
    }
  }
  
  @media all and (max-width: 1200px) {
    section {
      padding: 0;
    }
  }
</style>