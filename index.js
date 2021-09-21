const cheerio = require('cheerio');
const request = require('request-promise');

const url = 'https://www.pepcoding.com/resources/';
const def = "https://www.pepcoding.com";

let count =5;

request(url,main).then( ()=>{
    console.log(count);
} ).catch((err)=>{
 console.log(err);
} )

function main(error,response,html){
    if(error){
        console.log(error);
    }else{
        mainextract(html);
    }
}

//finding total questions and links of all three levels
function mainextract(html){
    let $ = cheerio.load(html);
    let q=$('.card-content.no-padding>div>a'); 
    for(let i=0;i<1;i++){
        let link = $(q[i]).attr("href");
        let fulllink = def+link;
        topics(fulllink,i+1);
    
    }

}

//we are calling level 1/2/3
function topics(url,lvl){
    request(url,cb);
    function cb(error,response,html){
            if(error){
                console.log(error);
            }else{
                modules(html,lvl);
            }
    }
}

//now we are inside level 1/2/3
function modules(html,lvl){
    let $ = cheerio.load(html);
    let linkArr = $('.collection-item.row.list-item a');
    let nameArr = $('.collection-item.row.list-item a .no-padding');
    // let count=0;
    for(let i=0;i<linkArr.length;i++){
        let name = $(nameArr[i]).text().trim();
        let link = $(linkArr[i]).attr("href");
        // console.log("level ",lvl,name," ",link);
        let qlink = def+link;
        findquestions(qlink,lvl,name);
        // console.log(findquestions(qlink,lvl,name));
    }
    // console.log(count);

}

//now we have to find direct questions from modules

async function findquestions(url,lvl,name){
    // let res = await
     request(url,fq);
    // return res;
    
    function fq(error,response,html){
        if(error){
            console.log(error);
        }else{
            count=count+findq(html,lvl,name);
        }
    }
}

//questions        

function findq(html,lvl,name){
    let $ = cheerio.load(html);
    let tot = $('.pageLink .fa.fa-code.grey-text');
    let solved = $(".pageLink span+.green-text");
    // console.log("you solved", solved.length,"questions from level ",lvl," ",name);
    return solved.length;


}
