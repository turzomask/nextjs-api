import fs from 'fs';
import path from 'path';

 export function buildFeedBackPath() {
    return path.join(process.cwd(), 'data', 'feedback.json');
}

 export  function extraxtFeedBack(filePath) {
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    return data;
}

function handler(req, res) {

    if (req.method == 'POST') {
        const email = req.body.email;
        const selectedValue = req.body.selectedValue;

        const newQuery = {
            id: new Date().toISOString,
            email: email,
            queryType: selectedValue
        }

        //  Storing data in file 
        const filePath = buildFeedBackPath();
        const data = extraxtFeedBack(filePath);
        data.push(newQuery);
        fs.writeFileSync(filePath, JSON.stringify(data));
        res.status(201).json({ message: "Success", feedback: newQuery });
    }

    else {
         
        const filePath = buildFeedBackPath();
        const data = extraxtFeedBack (filePath);
        res.status(200).json({ user: data });
    }

}

export default handler;