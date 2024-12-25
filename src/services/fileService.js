const path = require("path");
const uploadSingleFile = async (fileObject) => {
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let uploadPath = path.resolve(__dirname, "../public/images/upload");
    let extName = path.extname(fileObject.name);
    let baseName = path.basename(fileObject.name, extName);

    let finalName = `${baseName}-${Date.now()}${extName}`;
    let finalPath = `${uploadPath}/${finalName}`;

    try {
        await fileObject.mv(finalPath);
        return {
            status: "success",
            path: finalName,
            error: null
        }
    } catch (err) {
        return {
            status: "false",
            path: null,
            error: JSON.stringify(err)
        }
    }
}

const uploadMultipleFiles = async (filesArray) => {
    try {
        let uploadPath = path.resolve(__dirname, "../public/images/upload");
        let resultArr = [];
        let countSuccess = 0;
        for (let i = 0; i < filesArray.length; i++) {
            //get image extension
            let extName = path.extname(filesArray[i].name);
            //get image's name (without extension)
            let baseName = path.basename(filesArray[i].name, extName);

            //create final path: eg: /upload/your-image.png
            let finalName = `${baseName}-${Date.now()}${extName}`
            let finalPath = `${uploadPath}/${finalName}`;
            try {
                await filesArray[i].mv(finalPath);
                resultArr.push({
                    status: 'success',
                    path: finalName,
                    fileName: filesArray[i].name,
                    error: null
                })
                countSuccess++;
            } catch (err) {
                resultArr.push({
                    status: 'failed',
                    path: null,
                    fileName: filesArray[i].name,
                    error: JSON.stringify(err)
                })
            }
        }
        return {
            countSuccess: countSuccess,
            detail: resultArr
        }
    } catch (err) {
        console.log(err)
    }
}

module.exports = {uploadSingleFile, uploadMultipleFiles};