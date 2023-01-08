<script>
  import heroImage from '@lib/media/cover.jpg'
</script>

<section>
  <div class='hero' style="background-image: url('{heroImage}');">
    <h1>Leevi Vahvelainen</h1>
    <p class='subtitle'>Designer</p>
    <p>
      At the age of four, I used my first knife to strip a piece of wood and gave it to my grandpa to stun fish with. 
      That was the first product I build and I wouldn't yet know it was going to be what I do for my life's work.
    </p>
    <p>
      Designing solutions and building them is what I do and what I've always done and what I enjoy doing. 
      Welcome to take a look at some of that work of mine.
    </p>
  </div>
</section>

<style>
  .hero {
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    color: white;
    padding-top: 8em;
    padding-bottom: 8em;
  }
  p {
    max-width: 480px;
  }
  @media all and (max-width: 1200px) {
    section {
      padding: 0;
    }
  }
</style>