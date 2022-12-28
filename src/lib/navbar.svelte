<script>
  import linkedIn from '@lib/media/LinkedIn-lcon.svg'
</script>

<nav>
  <div>
    <a href='/' data-link>Dashboard</a>
    <a href='/work' data-link>Work</a>
    <a href='/bio' data-link>Bio</a>
    <a href='/history' data-link>History</a>
  </div>
  
  <a href='https://www.linkedin.com/in/vahvelainen/'>
    <img alt='LinkedIn' src={linkedIn}>
  </a>
</nav>

<style>
  * {
    box-sizing: content-box;
  }
  nav {
    display: flex;
    justify-content: space-between;
    height: 4em;
    padding: 2em calc( 100%/2 - 1200px/2 ) 0em;
    background: #222222;
  }
  div a {
    padding: 1em 18px;
    text-decoration: none;
    color: #eeeeee;
  }
  img {
    height: 2em;
    margin-right: 4em;
  }
  @media all and (max-width: 500px) {
    nav {
      max-width: 100%;
      padding-left: 1em;
      padding-right: 1em;
    }
    div a {
      padding: 0;
      margin-right: 0.8em;
    }
    img {
      margin-right: unset;
    }
  }
</style>