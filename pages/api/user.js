import fs from 'fs';
import path  from 'path';

function handler (req, res) {

if( req.method == 'POST')
{
    const email = req.body.email;
    const selectedValue = req.body.selectedValue;

    const newQuery = {
        id : new Date().toISOString,
        email : email,
        queryType : selectedValue
    }

    //  Storing data in file 
   const filePath = path.join(process.cwd(), 'data' , 'feedback.json');
   const fileData = fs.readFileSync (filePath);
   const data = JSON.parse(fileData);
   data.push(newQuery);
   fs.writeFileSync(filePath, JSON.stringify(data));
   res.status(201).json({message: "Success", feedback : newQuery});
 }

 else{res.status(200).json({message:"This working"});
}

}

export default handler;