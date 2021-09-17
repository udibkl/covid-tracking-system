var url="https://api.rootnet.in/covid19-in/stats/latest/";

var texta=document.getElementById('texta');
var text2=document.getElementById('textb');
getData();

 async function getData(val)
{

    var datafetch= await fetch(url);
    var dat=await datafetch.json();
    console.log(val)
    console.log("active: "+dat.data.summary.total);
    console.log("death: "+dat.data.summary.deaths);
   
    
    texta.innerHTML="<h3>Confirmed Cases: <br></h3><h3 id='active'>"+dat.data.summary.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+"</h3><br>"+
    "<h3>Deaths: </h3><h3 id='death'>"+dat.data.summary.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+"</h3><br><h3>Discharged:</h3><h3 id='discharged'>"+dat.data.summary.discharged.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+"</h3>"
    
    
    for(i=0;i<=35;i++)
    {
    if(dat.data.regional[i].loc==val)
    {
       
        console.log("location: "+dat.data.regional[i].loc);
        console.log("total confirmed: "+dat.data.regional[i].totalConfirmed);
        console.log("death: "+dat.data.regional[i].deaths);
        // text2.innerHTML="<h3>Stats of "+dat.data.regional[i].loc+"</h3>"+
        //  "<h3>Total Confirmed: "+dat.data.regional[i].totalConfirmed+"</h3>"+"<h3>Death: "+dat.data.regional[i].deaths+"</h3>";
        textb.innerHTML="<h3>Confirmed Cases: <br></h3><h3 id='active'>"+dat.data.regional[i].totalConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+"</h3><br>"+
    "<h3>Deaths: </h3><h3 id='death'>"+dat.data.regional[i].deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+"</h3><br><h3>Discharged:</h3><h3 id='discharged'>"+dat.data.regional[i].discharged.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+"</h3>"
        break;
    }
    }


}









