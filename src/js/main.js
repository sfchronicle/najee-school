require("./lib/social"); //Do not delete
require("velocity-animate");

// Velocity(document.getElementById("alabama"),{"translateY": "200px"},{duration:1500, easing: "spring"});
// Velocity(document.getElementById("auburn"),"slideDown",{duration:1500});
// Velocity(document.getElementById("michigan"),"slideDown",{duration:1500});
// Velocity(document.getElementById("alabama"), { opacity: 0.5 }, { duration: 1000 });

["alabama","auburn","cal","michigan","ohio","ucla","usc"].forEach(function(d,idx){
  console.log(idx);
  Velocity(document.getElementById(d),{"translateY": "400px"},{duration:1500, easing: "spring", delay: idx*200});
  if (d != "cal") {
    Velocity(document.getElementById(d),{"opacity": 0},{duration:1500, delay: 5000});
  } else {
    Velocity(document.getElementById(d),{"height": "*=10"},{duration:1500, delay: 5000});
  }
});
