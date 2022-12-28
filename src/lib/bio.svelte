<script>
  import biomage from '@lib/media/bio.jpg'
</script>

<section class="bio"> 
  <img src={biomage} alt="Potrait of Leevi Vahvelainen in Startup Sauna 2018">
  <div>
    <h2>Bio</h2>
    <p>
      I'm Leevi Vahvelainen and I like to solve problems with purpose in mind.
    </p>
    <p>
      As a designer, I'm the one who combines purpose and usability with technical implementation. With the design, user's needs come first with the goal of finding simple and creative solutions. No design is useful if it's not delivered properly, working with the technical execution is also what I find very meaningful.
    </p>
    <p>
      I've done projects from art to building businesses and my core strength is the capacity to consider many aspects and learn new skills required quickly. I believe elegance and quality to be the key to sustainable designs.
    </p>
  </div>
</section>

<style>
  .bio {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: wheat;
  padding-top: 8em;
  padding-bottom: 10em;
  }
  img {
    width: 20%;
    min-width: 10em;
    object-fit: contain;
    margin-right: 4em;
  }
  div {
    max-width: 480px;
  }
  @media all and (max-width: 500px) {
    .bio {
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