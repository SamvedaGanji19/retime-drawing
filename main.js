function setup(){
    video=createCapture(VIDEO);
     video.size(480,480);  
     canvas=createCanvas(500,500);
   canvas.position(600,200);
   poseNet=ml5.poseNet(video,ModelLoaded);
   poseNet.on('pose',gotPoses)
   }
   function draw(){
   background("#7a7676");
   }
   function ModelLoaded(){
   console.log("PoseNet Is Initialized");
   }
   function gotPoses(results){
   if (results.length>0){
       console.log(results);
   }
   }
   
   
   