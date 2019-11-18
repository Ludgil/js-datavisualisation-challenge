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
    let cloneTable2= document.getElementById("table2");

    // Get data in the first table
    function getDataTable1(cloneTable){
            let count=0;
            let dataInTable=[];

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
                    dataInTable[count++]=dataObject;
            }
            return dataInTable
        }
    // Get data in the second table
    function getDataTable2(cloneTable){

    let count=0;
    let dataInTable=[];

    for (let i=1;i<cloneTable.rows.length;i++){

        const dataObject= new Object();

        for(let j=1;j<cloneTable.rows[i].cells.length;j++){

            if(j==1){
                dataObject.country=cloneTable.rows[i].cells[j].innerHTML;
            }
            if(j==2){
                dataObject.data200709=cloneTable.rows[i].cells[j].innerHTML;
                parseInt(dataObject.data200709);
            }
            if(j==3){
                dataObject.data201012=cloneTable.rows[i].cells[j].innerHTML;
                parseInt(dataObject.data201012);
            }
        }
            dataInTable[count++]=dataObject;
    }
    return dataInTable;
}

    let dataInTable1=getDataTable1(cloneTable1);
    let dataInTable2=getDataTable2(cloneTable2);
    console.log(dataInTable2, dataInTable1);


// Extract the year data-------------------------------------------------------------------------------------------------------------
function mapping(dataTable, menuValue){

        let contentArray=[];

    switch(menuValue) {
          case "data2002":
                contentArray=dataTable.map(item=>item.data2002);

            break;
          case "data2003":
                contentArray=dataTable.map(item=>item.data2003);
            break;
          case "data2004":
                contentArray=dataTable.map(item=>item.data2004);
            break;
          case "data2005":
                contentArray=dataTable.map(item=>item.data2005);
            break;
          case "data2006":
                contentArray=dataTable.map(item=>item.data2006);
            break;
          case "data2007":
                contentArray=dataTable.map(item=>item.data2007);
            break;
          case "data2008":
                contentArray=dataTable.map(item=>item.data2008);
            break;
          case "data2009":
                contentArray=dataTable.map(item=>item.data2009);
              break;
          case "data2010":
                contentArray=dataTable.map(item=>item.data2010);
              break;
          case "data2011":
                contentArray=dataTable.map(item=>item.data2011);
              break;
          case "data2012":
                contentArray=dataTable.map(item=>item.data2012);
              break;
          case "data200709":
                contentArray=dataTable.map(item=>item.data200709);
              break;
          case "data201012":
                contentArray=dataTable.map(item=>item.data201012);
              break;

    }

        return contentArray;
}

// draw graph --------------------------------------------------------------------------
const graph= (data, year, selectTable, max) =>{


    // set the dimensions and margins of the graph----------------------------------------------------------------------------------------------
    let margin = {top: 30, right: 20, bottom: 55, left: 50},
        width = 800 - margin.left - margin.right,
        height = 600 - margin.top - margin.bottom;

    // create the svg object to the body of the page-------------------------------------------------------------------------------------------
    const svg1 = d3.select("#mw-content-text")
                   .insert("svg",selectTable)
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

      // X axis: scale-----------------------------------------------------------------------------------------------------------------------------------------
      const x = d3.scaleBand()
                  .domain(data.map(item=>item.country))
                  .range([0, width])
                  .paddingInner(0.3)
                  .paddingOuter(0.2);

      // Y axis: scale-----------------------------------------------------------------------------------------------------------------------------------
      const y = d3.scaleLinear()
                  .domain([0,max])
                  .range([height,0]);


      // append the bar rectangles to the svg element-----------------------------------------------------------------------------------------
      graph.selectAll("rect")
          .data(data)
          .enter()
          .append("rect")
          .attr("width", x.bandwidth())
          .attr("height",0)
          .attr("x", function(d){return x(d.country)})
          .attr("fill", "steelblue")
          .attr("y",height)
          .data(year)
          .transition()
          .duration(3000)
          .attr("y",function(d){return y(d)})
          .attr("height", function(d){return height-y(d)});

    // create AXIS-----------------------------------------------------------------------------------------------------------------------------

    const axeX=d3.axisBottom(x);
    const axeY=d3.axisLeft(y);

    groupeX.call(axeX);
    groupeY.call(axeY);

    groupeX.selectAll("text")
           .attr("transform", "rotate(-35) translate(-5,-5)")
           .attr("text-anchor","end");
}






// CREATE DROP DOWN----------------------------------------------------------------------------------------------------------------------------

const dataYear=["data2002","data2003","data2004","data2005", "data2006","data2007","data2008","data2009","data2010","data2011","data2012"];
const years=[2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012];
const yearsTable2=["2007-09","2010-12"];
const dataYearTable2=["data200709","data201012"];
const max1=6500;
const max2=330;


// DROP DOWN 1 --------------------------------------------------------------------------------------------------------
const dropdown1=d3.select("#mw-content-text")
                  .insert("select","#table1")
                  .attr("id", "selectcountry1")
                  .on("change", switchcountry1);

    dropdown1.selectAll("option")
             .data(years)
             .enter()
             .append("option")
             .text(function(d){return d})
             .data(dataYear)
             .attr("value", function(d){return d});
// DROP DOWN 2 --------------------------------------------------------------------------------------------------------------------------------
const dropdown2=d3.select("#mw-content-text")
                  .insert("select","#table2")
                  .attr("id", "selectcountry2")
                  .on("change", switchcountry2);

      dropdown2.selectAll("option")
               .data(yearsTable2)
               .enter()
               .append("option")
               .text(function(d){return d})
               .data(dataYearTable2)
               .attr("value", function(d){return d});

// FUNCTION FOR DRAW THE GRAPH ON SELECTION ----------------------------------------------------------------------------------------------------
    function switchcountry1(){
        d3.select("#mw-content-text").select("svg").remove();
        graph(dataInTable1, mapping(dataInTable1,this.value),"#table1", max1);
    }

    function  switchcountry2(){
        d3.select("#mw-content-text").select("svg").remove();
        graph(dataInTable2, mapping(dataInTable2,this.value),"#table2", max2);
    }


    //graph(dataInTable1,mapping(dataInTable1,"data2002"), "#table1", max1);
    //graph(dataInTable2,mapping(dataInTable2,"data200709"), "#table2", max2);


})();
