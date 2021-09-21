const cheerio = require('cheerio');
const request = require('request');

const url = 'https://www.pepcoding.com/resources/'
const lvl1url = 'https://www.pepcoding.com/resources/online-java-foundation';
const lvl2url = 'https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup'
const lvl3url = 'https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-interview-prep'

const gs = 'https://www.pepcoding.com/resources/online-java-foundation/stacks-and-queues/';

request(gs,cb);
function cb(error,response,html){
    if(error){
        console.error('error:', error); 
    }else{
        // extractHTML(html);
        // fromlevel1(html);
        count(html);
    }
}

function count(html){
    let $ = cheerio.load(html);
    let q = $('.collection.resourceList  li div .name');
    // let m = $(q).find("li");
    console.log(q.length);
    for(let i=0;i<q.length;i++){
        let sol = $(q[i]).hasClass("text-green");
        // console.log($(q[i]).text().trim());
        console.log(sol);
    }
    


}


// let arr =[];
// var lvl1=0,lvl2,lvl3;
// function extractHTML(html){
//     let $=cheerio.load(html);
//     let q=$('img.row.center.course-icon-svg+.row.no-margin.no-padding.icon');  //man of the match motm
//     var l1 = $(q[0]).text().trim();
//     let l2 = $(q[1]).text().trim();
//     let l3 = $(q[2]).text().trim();
//     lvl1=l1;

// }
// console.log(lvl1);
// console.log(lvl2);
 
// function fromlevel1(html){
//     let $=cheerio.load(html);
//     let module = $('.row.collapsible.classResource .collapsible-body a');
//     let link = $(module).text().;
//     console.log(link[5]);
   
// }


