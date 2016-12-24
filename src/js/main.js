require("./lib/social"); //Do not delete
require("velocity-animate");

// Velocity(document.getElementById("alabama"),{"translateY": "200px"},{duration:1500, easing: "spring"});
// Velocity(document.getElementById("auburn"),"slideDown",{duration:1500});
// Velocity(document.getElementById("michigan"),"slideDown",{duration:1500});
// Velocity(document.getElementById("alabama"), { opacity: 0.5 }, { duration: 1000 });

["alabama","auburn","cal","michigan","ohio","ucla","usc"].forEach(function(d,idx){
  console.log(idx);
  Velocity(document.getElementById(d),{"translateY": "200px"},{duration:1500, easing: "spring", delay: idx*1200});
  Velocity(document.getElementById(d),{"opacity": 0},{duration:1500, delay: 10000});
});
