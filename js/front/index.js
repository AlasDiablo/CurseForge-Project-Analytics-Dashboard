function makeNav(modList) {
    let out = "";
    modList.forEach(e => {
        out += `
<li class="nav-item">
    <a class="nav-link" href="${e.url}">
      ${e.name}
    </a>
</li>
        `
    });
    return out;
}

module.exports = function (vega_lite, modList) {
    return `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>CurseForge Dashboard</title>

    <link rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
        crossorigin="anonymous"
    >
    <link href="dashboard.css" rel="stylesheet">
    
    <script src="https://cdn.jsdelivr.net/npm/vega@5.15.0"></script>
    <script src="https://cdn.jsdelivr.net/npm/vega-lite@4.15.0"></script>
    <script src="https://cdn.jsdelivr.net/npm/vega-embed@6.11.1"></script>
    
  </head>
  <body>
  <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
  <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">CurseForge Dashboard</a>
</nav>

<div class="container-fluid">
  <div class="row">
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="sidebar-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link active" href="#">
              Overview <span class="sr-only">(current)</span>
            </a>
          </li>
          
          ${makeNav(modList)}
          
        </ul>
      </div>
    </nav>

    <main role="main" id="content" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Overview</h1>
      </div>

      <div class="my-4 w-100" id="myChart"></div>
      
    </main>
  </div>
</div>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>

<script type="text/javascript">
  const spec = ${vega_lite};
  
  const divElement = document.querySelector("#content");
  
  spec.width = divElement.offsetWidth * 0.75;
  spec.height = divElement.offsetHeight * 4;
  
  vegaEmbed('#myChart', spec, {
      actions: {
          source: false,
          compiled: false,
          editor: false
      },
      theme: "vox"
  });
</script>

</html>
    `
};