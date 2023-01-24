//   /**
//    * 
//    * @param {*} ctUid 
//    * @param {*} where 
//    * @param {*} ref 
//    * @param {*} locale 
//    * @returns 
//    */
//   getAllEntriesWithRef(ctUid, ref, where=null, locale="en-us"){
//     let perpage = 6, // Show per page entries
//     limit= 4,
//     skip = pagenumber ? ((pagenumber-1) * perpage) : 0;

//     return new Promise((resolve, reject) => {
//       const blogQuery = Stack.ContentType(ctUid)
//         .Query()
//         .language(locale)
//         .includeReference(ref)
//         .toJSON();

//       let data = blogQuery
      
//       if( where != null ){
//         where.map( (where, index) => {
//           data = whereClause(blogQuery, where.key, where.value )
//         } )
//       }
      
//       data.then(
//         (result) => {
//           resolve(result[0]);
//         },
//         (error) => {
//           reject(error);
//         },
//       );
//     });
//   }