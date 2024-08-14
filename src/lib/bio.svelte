<script>
  import biomage from '@lib/media/bio.jpg'
</script>

<section class="bio"> 
  <div class="content">
    <img src={biomage} alt="Potrait of Leevi Vahvelainen in aGrid Otaniemi 2021 taken by Tiina Nyman">
    <div class="text">
      <h2>Bio</h2>
      <p>
        Hi! I’m what I would call a young product design professional. I dabble between design, software engineering, and business development. I have a degree in design from Aalto University, years of self-taught programming skills, and business experience from running a company to consulting others.
      </p>
      <p>
        Recently I have taken the opportunity to specialize in design of AI systems during my masters degree. Building on my software development experience, I have quickly gained experience in applying a variety of technologies to different use cases. Through my academic efforts I consider myself one of the few experts in designing these systems to be human friendly.      </p>
      <p>
        I am often credited by programmers for understanding their work, by clients of clear and proper presentation, and in general for being able to focus on the things that matter. My take on design is to be on with the good guys. I love novel problems and new challenges.
      </p>
    </div>
  </div>
</section>

<style>
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e7e7e7;
    padding-top: 8em;
    padding-bottom: 10em;
  }
  img {
    width: 20%;
    min-width: 10em;
    object-fit: contain;
    margin-right: 4em;
  }
  .text {
    max-width: 480px;
  }
  @media all and (max-width: 1200px) {
    .bio {
      background-color: #e7e7e7;
    }
  }
  @media all and (max-width: 500px) {
    .content {
      flex-direction: column;
      padding-top: 4em;
      padding-bottom: 6em;
    }
    img{
      object-fit: cover;
      margin-right: auto;
      margin-bottom: 2em;
      height: 8em;
      width: 8em;
      min-width: unset;
      border-radius: 9999px;
    }
  }

</style>