function getRowList(data){
    let newData = [];
    let counter = 0;
    for(let i = 0; i < data.length; i ++){
        if(counter == 6 || counter == 0){
            counter = 0;
            let temp = [];
            newData.push(temp);
        } 
        newData[Math.floor(i/6)].push(data[i]);
        counter ++;
    }
    console.log(newData);
    return newData;

}

//this will become API later
function getImage(id){
    switch(id){
        case 1:
            return "/tempAssets/book1.jpg";
        case 2:
            return "/tempAssets/book2.jpg";
        case 3:
            return "/tempAssets/book3.jpg";
        default:
            throw new Error("no image");
    }

}

export {getImage, getRowList}