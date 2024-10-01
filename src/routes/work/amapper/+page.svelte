<svelte:head>
  <title>Amapper | Vahvelainen.com</title>
	<meta name="description" content="Ai based affinity mapping tool by Leevi Vahvelainen" />
</svelte:head>

<section class="work-view">
  <img data-fancybox="aMapper" class="header" src="../images/aMapper.png">

  <h1>aMapper</h1>

  <ul>
    <li>Ai based affinity mapping tool</li>
    <li>Tool goups input documents (ie. customer feedback) into similiar themes</li>
    <li>Algorithm used is Spherical K-means mapping with TF-IDF vectorization</li>
    <li>All in your browser window: no data is transferred trough internet</li>
  </ul>

  <p>
    A personal weekend project of mine. I started working with it after taking Reaktor's Elements of Ai -courses and realising I could program something like this myself.
  </p>

  <p>
    On top of the technical side, the project is an minimalistic styling experiment for an online tool. The aim of the design is to make the tool easy to approach, use, and to play with.
  </p>

  <p class="note">
    Update 2024: This was a very crude and low tech demo I made when beginning to learn AI technologies. 
    TF-IDF is an outdated approach, but the general principle is very much usable with more advanced deep learning models such as openAI embeddings or SBERT. However, those models are harder to run in the browser. 
    The implementation of algorithms is still kinda cool as it is pure handwritten JS (before ChatGPT mind you). I made the github repo a bit more readable, and its available on 
    <a href="https://github.com/Vahvelainen/aMapper">github</a>
  </p>

  <p>
    <a href="https://amapper.web.app/">
      Online demo
    </a>
  </p>

  <p>
    <a href="https://github.com/Vahvelainen/aMapper">
      Github repository
    </a>
  </p>

  <a class='nav-back' href="/work" data-link>Return to other works</a>
</section>
