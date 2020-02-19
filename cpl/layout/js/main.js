$(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $(this).toggleClass('active');
      });
  });
/*
  var header = document.getElementById("sidebar");
  var btns = header.getElementsByClassName("sidebar-header");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", " ");
    this.className += " active";
    });
  }

  */

 let myChart = document.getElementById('myChart').getContext('2d');
 let masspopChart = new Chart(myChart, {

   type:'bar',
   data:{
       lables:[
           'Yemen',
           'Iraq',
           'lobonan',
           'Egypt'
       ],
       dataset:[
           
               {
                   label:'peoplation',
                   data:[
                       4564896,
                       4654842,
                       1564821,
                       4847421
                   ]
               
               }

           ]

   
   },   
   

   Options:{
        title:{
            display:true,
            text:'largiest cities',
            fontsize:26,
                 
        },

        legend :
        {
            position:'right'

        }

   }

 });
