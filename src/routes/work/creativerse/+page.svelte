<svelte:head>
  <title>Creativerse | Vahvelainen.com</title>
	<meta name="description" content="Generative AI tool by Leevi Vahvelainen" />
</svelte:head>

<section class="work-view">
  <img data-fancybox="creativerse" alt="Closeup of creativerse demoday setup with lego blocks" class="header" src="../images/creativerse/closeup.jpg">
  
  <h1>Creativerse</h1>
  
  <p>
    Creativerse is a result from a project course in Eindhoven University of technology. The project was done as a group effort with other design students in the “Artifice” squad standing for Aesthetics and Ethics in Artificial intelligence. The project's theme was AI for design and creativity and was done to Phillips museum. The project contained me as an exchange student and three fresh Industrial Design master students. As usual, I was responsible for technological development and this time I was directing my design efforts into empowering my groupmates to utilize their creativity during the project.
  </p>
  
  <p>
    The project was build together with Leevi Vahvelainen (me), Lu Zhouyating, Hannah Qiu, and Yunyin Lou for the course DFP008 Artifice: Aesthetics and Ethics of Artificial Intelligence during my exchange in the Eindhoven University of technology.
  </p>

  <h2>
    “You too can be a designer”
  </h2>
  
  <p>
    The project took a direction of showcasing Phillips product design by allowing visitors to visualize finished versions of their designs built from lego blocks. The “alternative dimension” was created with a webcam picture enchanted with Stable Diffusion API from stability.ai. To make the system “museum visitor proof” predefined options for the product category, material, style etc. were used that users could select.
  </p>

  <p>
    When users found a satisfying combination they moved to a pre-designed product page telling the story of the design and the design was saved to a gallery among other creations. The page ended with QR code leading to a “souvenir” page that visitors could save to further remember the experience.
  </p>

  <img data-fancybox="creativerse" src="../images/creativerse/overview.jpg" alt="The finished design in use with a lego block during the demo day.">

  <h2>
    Design choices
  </h2>

  <p>
    The system had a multitude of unique design choices since image generation is in a bit of a wild west of usability design at the moment I think. The project was motivated by two main drivers: desire to add tangibility and predictability to image generation and providing museum visitors fun and interesting interaction.
  </p>

  <p>
    To start with the latter: there was the choice of limiting the users' options into very well defined product categories. The prompt was built by user selections and the type of product matters most when you are describing what the image should depict, the easiest way for everyone is to limit the choices to a few. Writing it would be easy and flexible in any other circumstances, but in a museum we want to keep things very simple. Design attributes such as material and style which were also presented with fixed options. However, with those selections the idea was also to inspire users to think of the choices product designers have to make.
  </p>

  <p>
    The final goal was to add control and tangibility to the system. Problem with AI image generation is that you are a bit at the mercy of randomness if you are only using a prompt. This was the initial reason for using lego blocks and webcam in the first place as the main input. The final step was to add control to the software side so that users could easily go back and forth with consecutive generations before committing to one. Each generation is a bit unique and having the going back option removes the mental struggle of deciding between keeping a current image or going for another one.
  </p>

  <p>
    In the software, there were more subtle interaction design choices and problems such as how to communicate the need to wait when AI is generating the image and how to make it apparent when you are taking a new picture versus creating new versions of the previous one. I personally love working with these details and unfortunately cannot provide you with a working  demo right now, I can still assure you the final result was very intuitive for the demo day visitors.
  </p>

  <img data-fancybox="creativerse" src="../images/creativerse/product.png" alt="Product selection page">
  <img data-fancybox="creativerse" src="../images/creativerse/picture.png" alt="Taking image in the software">
  <img data-fancybox="creativerse" src="../images/creativerse/edit.png" alt="Editing attributes of teh design">
  <img data-fancybox="creativerse" src="../images/creativerse/history.png" alt="Selecting from previous generations">
  <img data-fancybox="creativerse" src="../images/creativerse/gallery.png" alt="A board of user creations durign demoday">

  <h2>Technology</h2>

  <p>
    The Creativerse was implemented as a web application with the familiar SvelteKit and Firebase. The image creation was done using Stable Diffusion API by Stability.ai.
  </p>

  <h2>
    End of the project
  </h2>

  <p>
    The project was showcased in a demo day in the Eindhoven University of technology. Initially the Phillips Museum representative was very keen to get it showcased in their upcoming AI exhibition. However - and just between you and me - their interest stopped after I asked my typical consulting rate and travel compensation to finish the project :)
  </p>

  <img data-fancybox="creativerse" src="../images/creativerse/group.jpeg" alt="Our group for this project">
  <img data-fancybox="creativerse" src="../images/creativerse/inuse.jpg" alt="Overview of the demoday setup">


  <a class='nav-back' href="/work" data-link>Return to other works</a>
</section>
