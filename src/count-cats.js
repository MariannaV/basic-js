module.exports = function countCats(matrix) {
    const arrCats = matrix.flat();
    let catsNumber = 0;

    for (let index=0; index<arrCats.length; index++)
      arrCats[index] === "^^" && catsNumber++;

    return catsNumber;
};
