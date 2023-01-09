<script>
  import heroImage from '@lib/media/lio.png'
</script>

<section>
  <div class='hero'>
    <img src={heroImage} alt="Leevi strolling in the streets of Istanbul in balck and white">
    <div class="text">
      <h1>Leevi Vahvelainen</h1>
      <p class='subtitle'>Design, Technology & Entrepreneurship</p>
      <p class="story" >
        A designer and developer who is not afraid of learning how things work and start building. 
        Making world a better place by using right solutions in right situations.
      </p>
    </div>
  </div>
</section>

<style>
  .text {
    width: 40%;
    padding-top: 14em;
    padding-bottom: 8em;
    min-width: 400px;
    z-index: 1;
  }
  .subtitle {
    font-size: 2.5em;
    line-height: 1.2em;
    font-weight: 600;
  }
  .hero {
    display: flex;
    background-color: whitesmoke;
    justify-content: space-around;
  }
  img {
    margin-top: auto;
    max-height: 30em;
    /* margin-left: 12em; */
  }
  .story {
    max-width: 400px;
  }
  @media all and (max-width: 1200px) {
    section {
      padding: 0;
    }
  }
  @media all and (max-width: 700px) {
    section {
      padding: 0;
    }
    .hero {
      position: relative;
    }
    img {
      position: absolute;
      bottom: 0;
      left: 0;
      opacity: .3;
    }
  }
  @media all and (max-width: 500px) {
    .text {
      width: 100%;
      padding: 8em 2em;
      min-width: unset;
    }
    img {
      left: unset;
    }
  }
</style>