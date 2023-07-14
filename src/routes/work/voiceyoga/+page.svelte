<svelte:head>
  <title>VoiceYoga | Vahvelainen.com</title>
	<meta name="description" content="A web-based yoga application for blind people by Leevi Vahvelainen" />
</svelte:head>

<section class="work-view">
    <img data-fancybox="yoga" alt="VoiceYoga by Leevi Vahvelainen" class="header" src="../images/voiceyoga.png">
  
  <h1>VoiceYoga</h1>
  
  <p>
    A web-based yoga application for blind people that uses image recognition to give user advice on getting to the yoga positions. The application uses a combination of text-to-speech, voice commands, and a graphical user interface for interaction.
  </p>
  
  <p>
    Build together with Leevi Vahvelainen, Tuomo Väänänen, Yujun Zhu, Yifan Hao, and Xinyi Cao.
  </p>


  <h2>Video Demo</h2>
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/qMChxlGqKNc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  
  <h2>
    Spesification
  </h2>
  
  <p>
    The project was done as coursework with a mixed team of design and computer science students for the course CS-E4200 - Emergent User Interfaces at Aalto University. The assignment was to create any kind of health application that uses some kind of emerging user interface technology, meaning not only a screen, mouse, or keyboard.
  </p>

  <p>
    The technology for the project started only to exchange the experience of regular yoga users. Image recognition to give feedback and/or score and a voice user interface for hands-free operation. However, Tuomo - the other designer on the team - noted that the technology would be perfectly suited for visually impaired people (who usually actually are capable of using phones). With that focus the development focused on a yoga experience that didn’t rely on any visual feedback.
  </p>
  

  <h2>Design</h2>

  <p>Since the focus was on visually impaired users, the design concentrated on setting the app up and giving instructions based on the phase user was at. The users ended to be able to set the device so that the camera can see them and the program needed to be able to give instructions if users were too far left or right for example. People who can see very well or even partly could find themselves in front of the camera quite easily.</p>

  <p>The yoga part was a proof of concept that focused on carrying out certain moves from a simplified sun salutation routine. A test would check if the user has passed a certain condition for the posture, give advice if not and move to the next check it does. This is repeated for all the positions until the program is complete.</p>

  <p>Visually, the app was very simplified and had an emphasis on big text and buttons for partially visually impaired users.</p>

  <p>Overall the system was usable but had a possibility for users to get stuck on moves they cannot complete or if they misunderstood any part of the instruction. Further development would need to focus on solving these issues with for example additional instructions after a time limit or giving the user ability to skip over positions. Designing all this to a voice-first interface so that they are non-intrusive is an interesting but definitely possible design challenge.</p>

  <img data-fancybox="yoga" src="../images/voiceyoga/start.png" alt="VoiceYoga starting screen">
  <img data-fancybox="yoga" src="../images/voiceyoga/yoga.png" alt="VoiceYoga exercise screen">

  <h2>Technology</h2>

  <p>The technology started with Python based but eventually switched to a web-based framework with svelteKit. Both of them used TensorFlow libraries for image recognition. After a Python demo that compared pictures of people in yoga positions, the approach was deemed too slow to develop and the technology was switched to svelteKit with Leevi’s lead. Thanks to the “lightning fast” developing experience of SvelteKIt and Tensorflow JS libraries and Web Speech API, the tack provided a working proof of concept with under 10 hours of development for one yoga position.</p>

  <p>The component-based SvelteKit also provided an opportunity for creating a hybridity between voice and graphical user interface. A button can at the same moment be rendered on the screen and terms matching its action can be matched with one line of code. Also, text can be rendered at the same time it's broken aloud by Text To Speech.</p>

  <p>With some clever engineering, the framework also offered a relatively easy way to both manage Text To Speech with one function without creating issues of overlapping speech and match users’ voice commands to triggers all over the software without having multiple listening instances. Furthermore, it was possible to create a sub-framework for the yoga positions specifically that would run through the tests and move to the next position after they are all completed. If you are interested in technical development, I encourage you to read the whole project report given below.</p>

  <img data-fancybox="yoga" src="../images/voiceyoga/voicecode.png" alt="VoiceYoga starting screen">
  <img data-fancybox="yoga" src="../images/voiceyoga/posecode.png" alt="VoiceYoga exercise screen">

  <h2>Conclusion</h2>

  <p>Overall the project was a good demonstration of what the current development in image recognition, voice user interfaces, and web frameworks can offer. The most limiting factor with the current stack seemed to be the speech recognition of the Web Speech API, which is still far from flawless and often needed repeating from the users. The app got to a proof of concept stage but was still a bit away from being a usable example ready to be distributed and offer a meaningful user experience.</p>

  <a href="https://voiceyoga.web.app/" data-link><p>Online demo</p></a>
  <a href="https://drive.google.com/file/d/15ru4CcXIN9KqlCapHFkyojp-UTxpnB8F/view?usp=drive_link" data-link><p>Full project report</p></a>
  <a href="https://github.com/Vahvelainen/Voice-yoga-web" data-link><p>Project Github</p></a>



  <a class='nav-back' href="/work" data-link>Return to other works</a>
</section>

<style>
  iframe {
    max-width: 100%;
  }
</style>