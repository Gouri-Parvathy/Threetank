var tapstatus = "OFF";
    var tapstatus1="OFF"
    var tapstatus2="OFF"
    var H=400;
    var MT=0;
    var H1=400;
    var MT1=0;
    var H2 = 400;
    var MT2 = 0;
    var flow = "";
    var flow1="";
    var water_height=0;
    var water_Mt=300;
    var flowwater = document.getElementById("yellow-flow");
       var waterr = document.getElementById("red-water");
       var redbtn = document.getElementById("red-btn");
       var storewater=document.getElementById("store-water");
       var waterlevel=document.getElementById("water-level")

    function taps() {

      if (tapstatus == "OFF") {
       
        redbtn.style.backgroundColor = "yellow";
        tapstatus = "ON";
           if(H>0){
             flowwater.style.display="block"
             flowwater.style.background="yellow"
        var interval = setInterval(function () {
          H = H - 2;
          MT = MT + 2;
          waterr.style.height = H + "px";
          waterr.style.marginTop = MT + "px";
         
          if (H == 0||tapstatus=="OFF"|| flow=="OFF") {
            clearInterval(interval);
            flowwater.style.display="none";
            flow="ON"
          }
        },500);
      }
      //Container
   if (flow="ON"||tapstatus == "ON") {
                  
                    var waterinterval = setInterval(function () {
                  
                        water_height = water_height + 1;
                        water_Mt = water_Mt - 1;
                        waterlevel.style.height = water_height + "px";
                        waterlevel.style.marginTop = water_Mt + "px";
                        waterlevel.style.backgroundColor = "yellow";
                        
                        if(flow=="OFF" ||tapstatus=="OFF" ||water_height==400||water_Mt==0 ){
                            clearInterval(waterinterval);
                            flow="ON"
                        }
                    
                    }, 300);
                }
            } 
            else if (tapstatus =="ON") {
               
                flowwater.style.display = "none";
                redbtn.style.background = "red";
                flow="OFF"
                tapstatus = "OFF";
                
              
            }
        }

    function tape() {
      
      var redbtn1 = document.getElementById("red-btn1");
       var flowwater1 = document.getElementById("yellow-flow1");
       var waterrr = document.getElementById("red-water1");
      if(tapstatus1=="OFF"){
      redbtn1.style.background = "yellow";
      tapstatus1= "ON";
         if(H1>0){
           flowwater1.style.display = "block";
          flowwater1.style.backgroundColor = "yellow";
          var interval = setInterval(function() {
            H1=H1-2;
            MT1=MT1+2;
          waterrr.style.height = H1 + "px";
          waterrr.style.marginTop = MT1 + "px";
          if (H1 == 0||flow1=="OFF") {
            clearInterval(interval);
            flow1="ON"
          }
        },500);
      }
      if (flow1="ON"||tapstatus1 == "ON") {
                  
                    var waterinterval = setInterval(function () {
                  
                        water_height = water_height + 1;
                        water_Mt = water_Mt - 1;
                        waterlevel.style.height = water_height + "px";
                        waterlevel.style.marginTop = water_Mt + "px";
                        waterlevel.style.backgroundColor = "yellow";
                        
                        if(flow1=="OFF" ||tapstatus1=="OFF" ||water_height==400||water_Mt==0 ){
                            clearInterval(waterinterval);
                            flow="ON"
                        }
                    
                    }, 300);
                }
            } 
      else if (tapstatus1== "ON") {
        flow1="ON"
        flowwater1.style.display="none"
        redbtn1.style.background = "red";
        tapstatus1  = "OFF";
        flow1="OFF"
      }
    }
    


    
    function taps2() {
      var redbtn2 = document.getElementById("red-btn2");
       var flowwater2 = document.getElementById("yellow-flow2");
       var waterrs = document.getElementById("red-water2");
      if(tapstatus2=="OFF"){
      flowwater2.style.display="block"
      redbtn2.style.background = "yellow";
      tapstatus2= "ON";
           if(H>0){
             flowwater2.style.backgroundColor = "yellow";
        var interval = setInterval(function() {
          H2 = H2 - 2;
          MT2 = MT2 + 2;
          waterrs.style.height = H2 + "px";
          waterrs.style.marginTop = MT2 + "px";
         
          if (H2 == 0||flow=="OFF") {
            clearInterval(interval);
            
            flow="ON"
          }
        },500);
      }
      if (flow="ON"||tapstatus2 == "ON") {
                  
                    var waterinterval = setInterval(function () {
                  
                        water_height = water_height + 1;
                        water_Mt = water_Mt - 1;
                        waterlevel.style.height = water_height + "px";
                        waterlevel.style.marginTop = water_Mt + "px";
                        waterlevel.style.backgroundColor = "yellow";
                        
                        if(flow=="OFF" ||tapstatus2=="OFF" ||water_height==400||water_Mt==0 ){
                            clearInterval(waterinterval);
                            flow="ON"
                        }
                    
                    }, 300);
                }
            } 
            
                
              
            
        
    
      else if (tapstatus2== "ON") {
        flow="ON"
        flowwater2.style.display = "none";
        redbtn2.style.background = "red";
        tapstatus2 = "OFF";
        flow="OFF"
      }
    }
    