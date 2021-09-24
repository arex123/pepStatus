

const request = require('request-promise').defaults({ jar:true});
const cheerio = require("cheerio");

let count = 0;

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
                },
                simple:false,
                followAllRedirects :true
                
            }            
            ) ;
        


const url = 'https://www.pepcoding.com/resources/online-java-foundation/getting-started';



request(url, function (error, response, html) {
    if(error){
        console.log("error1");
    }else{
        count=count+findq(html);
    }

});

// .then(count => console.log(count+" ")).catch(err => console.log("error2"));



function findq(html){
    let $ = cheerio.load(html);
    let tot = $('.pageLink .fa.fa-code.grey-text');
    // let solved = $(".pageLink span+.green-text");
    // return solved.length;
    count=tot.length;


}

       
        
}
catch(err){
    console.log("error3");
}

}



console.log(count)
