// task h ki total solved problem ko print karana h: task done thanks to anand

let obj=[];

let l = 0;
let idx=0;
const request = require('request-promise').defaults({ jar:true});
const fs = require("fs");
const cheerio = require("cheerio");
let count = 0;


main()

async function main(){   
    try{

        const login = await request.post(
            "https://www.pepcoding.com/login",
            {
                form:{
                    email: ADD-YOUR-EMAIL,
                    password: ADD-YOUR-PASSWORD          
                },
                headers:{
                    'content-type': 'application/x-www-form-urlencoded'
                    // 'content-length':98,                    
                },
                simple:false,
                followAllRedirects :true
                
            }            
            ) ;
         

            
const url = 'https://www.pepcoding.com/resources/';
const def = "https://www.pepcoding.com";


firstReq()
// .then(res => console.log(count)).catch(err => console.log(err));

function firstReq(){
   
 request(url,main)
   
}

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
        let link = $(q[l]).attr("href");
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
    let count=0;
    idx=linkArr.length;
    for(let i=0;i<linkArr.length;i++){
        let name = $(nameArr[i]).text().trim();
        let link = $(linkArr[i]).attr("href");
        let qlink = def+link;
        findquestions(qlink,lvl,name);
       
    }
    // console.log(count);

}

//now we have to find direct questions from modules

function findquestions(url,lvl,name){
    
    request(url,fq);
    
    function fq(error,response,html){
        if(error){
            console.log(error);
        }else{


        
            obj.push(findq(html,lvl,name));
            if(idx==obj.length){
                display();
            }

        
            // console.log("you solved", findq(html,lvl,name) ,"questions from level ",lvl," ",name);  
        }
    }
}



//questions        
function findq(html,lvl,name){
    let $ = cheerio.load(html);
    let tot = $('.pageLink .fa.fa-code.grey-text');
    let solved = $(".pageLink span+.green-text");
    count=count+solved.length;
    return solved.length;


}

        }catch(error){
            console.log(error);
        }       
       
        
}




function display(){
    let c=0;
    for(let i=0;i<obj.length;i++){
        c+=obj[i];
        // console.log("you solved ",obj[i]);
    }
    console.log("total question solved: "+c);
}
