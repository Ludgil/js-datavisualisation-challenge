/*
// WRITE YOUR JAVASCRIPT BELOW THIS COMMENT
Your name :    Gilotaux Ludivic
Date :  12/11/19
Contact information :
What does this script do ?
...
*/

// Your scripting goes here...

(() => {


    let cloneTable1 = document.getElementById("table1");
    const dataObject= new Object();
    let countTable=0;
    let dataInTable1=[];

    for (let i=2;i<cloneTable1.rows.length;i++){

        const dataObject= new Object();

        for(let j=1;j<cloneTable1.rows[i].cells.length;j++){

            if(j==1){
                dataObject.country=cloneTable1.rows[i].cells[j].innerHTML;
            }
            if(j==2){
                dataObject.data2002=cloneTable1.rows[i].cells[j].innerHTML;
                if(dataObject.data2002.includes(",")){
                    dataObject.data2002=dataObject.data2002.replace(",",".");
                }
                if(dataObject.data2002.includes(":")){
                    dataObject.data2002=dataObject.data2002.replace(":",0);
                }
                parseInt(dataObject.data2002);
            }
            if(j==3){
                dataObject.data2003=cloneTable1.rows[i].cells[j].innerHTML;
                if(dataObject.data2003.includes(",")){
                    dataObject.data2003=dataObject.data2003.replace(",",".");
                }
                if(dataObject.data2003.includes(":")){
                    dataObject.data2003=dataObject.data2003.replace(":",0);
                }
                parseInt(dataObject.data2003);
            }
            if(j==4){
                dataObject.data2004=cloneTable1.rows[i].cells[j].innerHTML;
                if(dataObject.data2004.includes(",")){
                    dataObject.data2004=dataObject.data2004.replace(",",".");
                }
                if(dataObject.data2004.includes(":")){
                    dataObject.data2004=dataObject.data2004.replace(":",0);
                }
                parseInt(dataObject.data2004);
            }
            if(j==5){
                dataObject.data2005=cloneTable1.rows[i].cells[j].innerHTML;
                if(dataObject.data2005.includes(",")){
                    dataObject.data2005=dataObject.data2005.replace(",",".");
                }
                if(dataObject.data2005.includes(":")){
                    dataObject.data2005=dataObject.data2005.replace(":",0);
                }
                parseInt(dataObject.data2005);
            }
            if(j==6){
                dataObject.data2006=cloneTable1.rows[i].cells[j].innerHTML;
                if(dataObject.data2006.includes(",")){
                    dataObject.data2006=dataObject.data2006.replace(",",".");
                }
                if(dataObject.data2006.includes(":")){
                    dataObject.data2006=dataObject.data2006.replace(":",0);
                }
                parseInt(dataObject.data2006);
            }
            if(j==7){
                dataObject.data2007=cloneTable1.rows[i].cells[j].innerHTML;
                if(dataObject.data2007.includes(",")){
                    dataObject.data2007=dataObject.data2007.replace(",",".");
                }
                if(dataObject.data2007.includes(":")){
                    dataObject.data2007=dataObject.data2007.replace(":",0);
                }
                parseInt(dataObject.data2007);
            }
            if(j==8){
                dataObject.data2008=cloneTable1.rows[i].cells[j].innerHTML;
                if(dataObject.data2008.includes(",")){
                    dataObject.data2008=dataObject.data2008.replace(",",".");
                }
                if(dataObject.data2008.includes(":")){
                    dataObject.data2008=dataObject.data2008.replace(":",0);
                }
                parseInt(dataObject.data2008);
            }
            if(j==9){
                dataObject.data2009=cloneTable1.rows[i].cells[j].innerHTML;
                if(dataObject.data2009.includes(",")){
                    dataObject.data2009=dataObject.data2009.replace(",",".");
                }
                if(dataObject.data2009.includes(":")){
                    dataObject.data2009=dataObject.data2009.replace(":",0);
                }
                parseInt(dataObject.data2009);
            }
            if(j==10){
                dataObject.data2010=cloneTable1.rows[i].cells[j].innerHTML;
                if(dataObject.data2010.includes(",")){
                    dataObject.data2010=dataObject.data2010.replace(",",".");
                }
                if(dataObject.data2010.includes(":")){
                    dataObject.data2010=dataObject.data2010.replace(":",0);
                }
                parseInt(dataObject.data2010);
            }
            if(j==11){
                dataObject.data2011=cloneTable1.rows[i].cells[j].innerHTML;
                if(dataObject.data2011.includes(",")){
                    dataObject.data2011=dataObject.data2011.replace(",",".");
                }
                if(dataObject.data2011.includes(":")){
                    dataObject.data2011=dataObject.data2011.replace(":",0);
                }
                parseInt(dataObject.data2011);
            }
            if(j==12){
                dataObject.data2012=cloneTable1.rows[i].cells[j].innerHTML;
                if(dataObject.data2012.includes(",")){
                    dataObject.data2012=dataObject.data2012.replace(",",".");
                }
                if(dataObject.data2012.includes(":")){
                    dataObject.data2012=dataObject.data2012.replace(":",0);
                }
                parseInt(dataObject.data2012);
            }

        }
        dataInTable1[countTable++]=dataObject;
    }

    console.log(dataInTable1);


    // CREATE DROPDOWN MENU ----------------------------------------------------------------------------------------------------------------
const menuDropDown= () =>{
    const years=[2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012];
    let dropdown1=document.createElement("select");
    dropdown1.id="menu1";

    for(let i=0;i<years.length;i++){
        let opt=document.createElement("option");
        opt.text=years[i];
        opt.value="data"+years[i];
        dropdown1.appendChild(opt);
    }
    document.getElementsByTagName("h3")[0].append(dropdown1);
}

menuDropDown();






    // // create scaling on Y and X------------------------------------------------------------------------------
    // const ygraph1=d3.scaleLinear()
    //                 .domain([0,2800])
    //                 .range([0,600]);
    //
    // const xgraph1=d3.scaleBand()
    //                 .domain(dataInTable1.map(item=>item.country))
    //                 .range([0.600]);
    //
    //
    //
    //
    //
    // // create rect in the svg----------------------------------------------------------------------------
    // const rectanglesForGraph1 = svgGraph1.selectAll("svg")
    //                                      .append("rect")
    //                                      .data(dataInTable1);
    // // give data to rect------------------------------------------------------------------------------
    //     rectanglesForGraph1.attr("width", xgraph1.bandwidth())
    //                        .attr("height", function(d){return ygraph1(d.data2002)})
    //                        .attr("fill", "steelblue")
    //                        .attr("x", function(d){return xgraph1(d.country)});
    //
    //
    // // enter other data
    //
    //     rectanglesForGraph1.enter()
    //                        .append("rect")
    //                        .attr("width", xgraph1.bandwidth())
    //                        .attr("height", function(d){return ygraph1(d.data2002)})
    //                        .attr("fill", "steelblue")
    //                        .attr("x", function(d){return xgraph1(d.country)});
    //


const graph = (data,data.year) =>{


    // set the dimensions and margins of the graph
    let margin = {top: 30, right: 20, bottom: 55, left: 50},
        width = 800 - margin.left - margin.right,
        height = 600 - margin.top - margin.bottom;

    // insert the svg object to the body of the page
    const svg1 = d3.select("#mw-content-text")
                   .insert("svg","#table1")
                   .attr("width", width + margin.left + margin.right)
                   .attr("height", height + margin.top + margin.bottom)
                   .style("background", "GhostWhite");

    const graph= svg1.append('g')
                     .attr("width", width)
                     .attr("height",height)
                     .attr("transform",`translate(${margin.left},${margin.top})`);

    const groupeX=graph.append("g")
                       .attr("transform",`translate(0,${height})`);

    const groupeY=graph.append("g");

      // X axis: scale and draw:
      const x = d3.scaleBand()
                  .domain(dataInTable1.map(item=>item.country))
                  .range([0, width])
                  .paddingInner(0.3)
                  .paddingOuter(0.2);

      // Y axis: scale and draw:
      const y = d3.scaleLinear()
                  .domain([0,6600])
                  .range([height,0]);


      // append the bar rectangles to the svg element
      graph.selectAll("rect")
          .data(dataInTable1)
          .enter()
          .append("rect")
          .attr("width", x.bandwidth())
          .attr("height",0)
          .attr("x", function(d){return x(d.country)})
          .attr("fill", "steelblue")
          .attr("y",height)
          .transition()
          .duration(3000)
          .attr("y",function(d){return y(d.data2002)})
          .attr("height", function(d){return height-y(d.data2002)});

    // create AXIS

    const axeX=d3.axisBottom(x);
    const axeY=d3.axisLeft(y);

    groupeX.call(axeX);
    groupeY.call(axeY);

    groupeX.selectAll("text")
           .attr("transform", "rotate(-35) translate(-5,-5)")
           .attr("text-anchor","end");
}

switch(document.getElementById("menu1").option.value) {
  case data2002:
        graph();
    break;
  case data2003:
        graph();
    break;
  case data2004:
        graph();
    break;
  case data2005:
        graph();
    break;
  case data2006:
        graph();
    break;
  case data2007:
        graph();
    break;
  case data2008:
        graph();
    break;
  case data2009:
        graph();
      break;
  case data2010:
        graph();
      break;
  case data2011:
        graph();
      break;
  case data2012:
        graph();
      break;

}

graph();

})();
