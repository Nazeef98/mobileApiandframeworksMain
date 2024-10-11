//for checking incoming request
const logger = (req,res,next)=>{
    console.log(`${req.method}${req.originalUrl} - ${new Date().toISOString()}`);
    next();
}

//validation movies data
const validateMovie = (req,res,next)=>{

    const{ title,studio,year,genres,directors} = req.body;
    if(!title || !studio || !year || !genres || !directors){
        return res.status(400).send('Missing required fields:title,studio,genres, year or directors');
    }
    if(typeof year !== 'number' || year < 1888 || year > new Date().getFullYear()){
        return res.status(400).send('Invalid Year');
    }

    next();

};