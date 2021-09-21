const cheerio = require('cheerio');
const { find } = require('domutils');
const request = require('request');

const url = 'https://www.pepcoding.com/resources/online-java-foundation/recursion-with-arraylists';
const url1 = "https://www.pepcoding.com/resources/online-java-foundation/stacks-and-queues";
request(url,main);

function main(error,response,html){
    if(error){
        console.log(error);
    }else{
        findq(html);
    }
}

function findq(html){
    let $ = cheerio.load(html);
    let tot = $('.pageLink .fa.fa-code.grey-text');
    console.log(tot.length);
    for(let i=0;i<tot.length;i++){
         let isSolved = $(".pageLink span+.green-text");
        console.log(isSolved.length);
    }

}