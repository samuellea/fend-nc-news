const articles = [
      {
        article_id: 1,
        voteChange: 1
      },
      {
        article_id: 2,
        voteChange: -1
      }
    ]

    const objectAlreadyExists = (array, id_type, id_value) => {
      return array.findIndex((element) => {
        // console.log(Object.entries(element)[0][0] === id_type && Object.entries(element)[0][1] === id_value)
        return Object.entries(element)[0][0] === id_type && Object.entries(element)[0][1] === id_value;
      })
    } 

    // let final = objectAlreadyExists(articles, 'article_id', 1)

    console.log(objectAlreadyExists(articles, 'article_id', 1) >= 0)

    // if (final >= 0) console.log('object already exists');

    // const articleAlreadyExists = articles.findIndex((element) => {
    //   return Object.entries(element)[0][0] === 'article_id' && Object.entries(element)[0][1] === 1
    // })

    // console.log(articleAlreadyExists)



// check if the 'articles' element with article_id 1 has a voteChange value different to the one provided

// let res = articles.find((element)=> element.article_id === 1);

// console.log(res.voteChange === voteChange);


// const hasNewVoteChangeValue = (array, id_type, value, voteChange) => {
//   const res = array.find((element)=> element[id_type] === value);
//   return res.voteChange === voteChange;
// }

// let final = hasNewVoteChangeValue(articles, 'article_id', 1, 1)

// console.log(final)