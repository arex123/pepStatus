// task h ki total solved problem ko print karana h


const request = require('request-promise').defaults({ jar:true});
const fs = require("fs");
const cheerio = require("cheerio");
main();
async function main(){   
    try{

        const login = await request.post(
            "https://www.pepcoding.com/login",
            {
                form:{
                    email:"ad47kumar@gmail.com",
                    password:"Hello@123"             
                },
                headers:{
                    'content-type': 'application/x-www-form-urlencoded'
                    // 'content-length':98,                    
                },
                simple:false,
                followAllRedirects :true
                
            }            
            ) ;
            // fs.writeFileSync("./login.html",login);

            // const url = "https://www.pepcoding.com/resources/online-java-foundation/stacks-and-queues";
            // const url1 = "https://www.pepcoding.com/resources/online-java-foundation/recursion-with-arraylists";
            // const url2 ="https://www.pepcoding.com/resources/online-java-foundation/introduction-to-recursion";



            
const url = 'https://www.pepcoding.com/resources/';
const def = "https://www.pepcoding.com";

let count = 0;

main1()
// .then(res => console.log(count)).catch(err => console.log(err));

async function main1(){
   

       let rek = await request(url,main)

   
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
    let count=0;
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

async function findquestions(url,lvl,name,max,min){
    // let res = await
     request(url,fq);
    // return res;
    
    function fq(error,response,html){
        if(error){
            console.log(error);
        }else{
            // count=count+findq(html,lvl,name);
            // if(min==max)
            // console.log(count);
            // console.log(findq(html,lvl,name));


            console.log("you solved", findq(html,lvl,name) ,"questions from level ",lvl," ",name);  
        }
    }
}

//questions        

function findq(html,lvl,name){
    let $ = cheerio.load(html);
    let tot = $('.pageLink .fa.fa-code.grey-text');
    let solved = $(".pageLink span+.green-text");
    return solved.length;


}

            // request(url1,main);

            // function main(error,response,html){
            //     if(error){
            //         console.log(error);
            //     }else{
            //         let solved = findq(html);
            //         console.log(solved);
            //     }
            // }
            
            // function findq(html){
            //     let $ = cheerio.load(html);
            //     let tot = $('.pageLink .fa.fa-code.grey-text');
            //     let solved = $(".pageLink span+.green-text");
            //     return solved.length;
            
            // }




        }catch(error){
            console.log(error);
        }
            
       
       
        
        // console.log(count);
}




