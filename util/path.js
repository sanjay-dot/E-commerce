const path = require('path');

module.exports = (req, res, next) => {
    const filePath = path.dirname(process.mainModule.filename);
    const currentPath = req.path;
    
    res.render('head', {
        path: currentPath
    });
};
