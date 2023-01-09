<script>
  import biomage from '@lib/media/bio.jpg'
</script>

<section class="bio"> 
  <div class="content">
    <img src={biomage} alt="Potrait of Leevi Vahvelainen in aGrid Otaniemi 2021 taken by Tiina Nyman">
    <div class="text">
      <h2>Bio</h2>
      <p>
        I'm Leevi Vahvelainen, a designer and developer based in Helsinki Finland. I have worked on various projects including events for over 300 people and industrial design concepts. I'm most familiar with online platforms.
      </p>
      <p>
        I have the most experience in designing and leading projects where I like to take a strategic and focused approach. In the end, delivering is what matters, and focusing on what is most important allows learning quickly. My developer capabilities lie in front-end and javascript but I'm familiar with most common full-stack solutions. Creating tangible and smooth user interactions and logistics inspire me more than back-end communication. Visually I get the job done.
      </p>
      <p>
        I'm always out there to learn new skills and concepts. The things I know how to do today won't prevent me from doing something new tomorrow.
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