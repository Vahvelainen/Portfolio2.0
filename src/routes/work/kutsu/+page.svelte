<section class="work-view">
    <img data-fancybox="kutsu" alt="Old Menddie mobileviews designed by Leevi Vahvelainen" class="header" src="../images/kutsu.png">
  
  <h1>Kutsu.app</h1>
  
  <p>
    Kutsu was developed after realizing no one uses facebook-events anymore - the usual way people in Aalto university found out who is coming to which event. The project started with a pitch “Facebook events without Facebook” which seemed like a perfect exercise for designing and developing an online application that had the potential to be actually useful.  The project was meant to be an exercise and wasn’t meant to have any business future.
  </p>
  
  <h2>
    Design and spesification
  </h2>
  
  <p>
    The general approach was to build a working, decent-looking but barebones MVP and present it to different student associations of Aalto university and other people who might find it useful.
  </p>

  <p>
    As the app was going to be used mainly for student associations, it made sense to benchmark features to what these associations have been using so far. Common solutions used is a Google Forms or Typeform for registration, which would be shared to the association's chat as a link with a description event. Certain events - mainly organized by a guild of information networks (very tech-savvy people) used their own platform that included the possibility to edit and cancel signups, and like Facebook, events showed who was coming to the events.
  </p>
  <p>
    Kutsu started as a prototype for the UX flow in Figma, just as a sanity check for what would it mean to have event invitations work only with online platforms. The further design included figuring out what other functions and pages were necessary, such as registration for the event creators, etc. Figma was used throughout the project to separate the design stage from the development. The workflow was to draw the UX flowchart in Figma, draw at least a wireframe, and only after that develop the front-end and functions.
  </p>

    <img data-fancybox="kutsu" src="../images/kutsu/firstDrafts.png" alt="Kutsu.app first drafts in figma">
    <img data-fancybox="kutsu" src="../images/kutsu/flowAndDB.png" alt="Kutsu.apps Ux flow and database structure in figma">
    <img data-fancybox="kutsu" src="../images/kutsu/wireframes.png" alt="Kutsu.app wireframes in figma">
    <img data-fancybox="kutsu" src="../images/kutsu/frontPageFigma.png" alt="Kutsu.app landingpage draft in figma">

  <h2>
    Developing
  </h2>
  <p>
    Kutsu had a relatively complex set of requirements for a tech stack but nothing a modern javascript framework and serverless architecture could not answer. The most limiting features for choosing the tech stack were:
  </p>
  <ol>
    <li>Serverside rendering for the event pages. This was necessary to get thumbnails of the events to chat applications.</li>
    <li>User authentication or similar to let event creators see the information of people registered for events.</li>
    <li>Information security, the key function of the app is to collect personal information.</li>
  </ol>
  <p>
    With all these specifications in mind, the decision was to build the application using SvelteKit and Firebase. Firebase allows relatively low-effort user authentication and its database has purposely built security functions to support it. Svelte is a newer javascript framework that was chosen for the very simplified development experience and SvelteKit is a meta-framework for Svelte enabling routing and serverside rendering. To make the front-end look smooth from the beginning, a Svelte Material Ui (smui for short) was used, Googles material Ui was not compatible with Sveltekits serverside rendering.
  </p>
  <p>
    The development required roughly six weeks before being already too good to be really called an MVP. Some bugs and features such as the option to delete events were still missing and added during and before the first pilots.
  </p>

    <img data-fancybox="kutsu" src="../images/kutsu/eventPage.png" alt="Event poage of the Kutsu.app">
    <img data-fancybox="kutsu" src="../images/kutsu/eventEdit.png" alt="Kutsu.apps Ux flow and database structure in figma">
    <img data-fancybox="kutsu" src="../images/kutsu/landingPage.png" alt="Kutsu.app wireframes in figma">
    <img data-fancybox="kutsu" src="../images/kutsu/questionsAdd.png" alt="Kutsu.app wireframes in figma">

  <h2>
    Piloting and feedback
  </h2>
  <p>
    Kutsu was piloted with a few events, one of which had over 100 participants. None of the pilots ended up using the possibility to add questions to the participants and only used the app as a means to share the information. Other than that, people really did find their way around the app. Some expected feedback was given such as a request to create a calendar entry.
  </p>
  <p>
    The app had a landing page with the possibility to join a waitlist to become a beta tester. Some users from the pilots - although not very many find their way to the landing page unfortunately none of them left their email there. This led to the conclusion that there isn’t too much demand for the app as it is to justify perfecting it and the development was put on pause. Overall the project was successful as an experiment and the service might see future development in case new demand is found.
  </p>

  <a href="https://kutsu.app/" data-link>Kutsu.app website</a>
  <a href="https://kutsu.app/event?e=s32uBkiZne99kfZ9jTmv" data-link>Demo event</a>


  <a class='nav-back' href="/work" data-link>Return to other works</a>
</section>
