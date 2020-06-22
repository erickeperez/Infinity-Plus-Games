import React, {useState, useEffect} from "react";

function Pagination() {
  // function Paginate(){ 
    const [currentPage, setCurrentPage] = React.useState(0);
    const [maxPages, setmaxPages] = React.useState(10);

  function nextPage() {
     if(currentPage < maxPages){
       setCurrentPage(prevCurrentPage => prevCurrentPage + 1)
     }
     console.log("NEXT ", currentPage)
   }

     function prevPage() {
        if(currentPage > 1){
          setCurrentPage(prevCurrentPage => prevCurrentPage - 1)
        }
        console.log("PREV ", currentPage)
      }

      // useEffect(() => {
      //   console.log(currentPage);
      // }, [currentPage])
    // let maxPages = 4;
  //   let items = [];
  //   let leftSide = currentPage - 2;
  //   if(leftSide <= 0 ) leftSide=1;
  //   let rightSide = currentPage + 2;
  //   if(rightSide>maxPages) rightSide = maxPages;
  //   for (let number = leftSide ; number <= rightSide; number++) {
  //     items.push(
  //       <div key={number} className={(number === currentPage ? 'round-effect active' : 'round-effect')} onClick={()=>{ setCurrentPage(number)}}>
  //         {number}
  //       </div>,
  //     );
  //   }
  // const nextPage = () => {
  //   if(currentPage < maxPages){
  //     setCurrentPage(prevState => prevState + 1)
  //   }
  //   console.log(currentPage)
  // }
  
  // const prevPage = () => {
  //   if(currentPage>1){
  //     setCurrentPage(currentPage-1)
  //   }
  // }
  
  //   const paginationRender = (
  //     <div className="flex-container">
  //     <div> currentPage : { currentPage } </div>
        
  //       <div className="paginate-ctn">
  //         <div className="round-effect" onClick={prevPage}> &lsaquo; </div>
  //         {items}
  //         <div className="round-effect" onClick={nextPage}> &rsaquo; </div>
  //       </div>
  //     </div>
  //   );
  //   return (paginationRender);
  // }




  var myHeaders = new Headers();
  myHeaders.append("user-key", process.env.REACT_APP_GAME_API_KEY);
  myHeaders.append("Content-Type", "text/plain");
  myHeaders.append(
    "Cookie",
    "__cfduid=de94ed42c783b84caa5238181e82a37651590868499"
  );

  var raw =
    "fields id,name,popularity,url,summary,storyline,websites,cover.url; limit 10; ";

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  var proxyUrl = "https://cors-anywhere.herokuapp.com/",
    targetUrl = "https://api-v3.igdb.com/games";

  fetch(proxyUrl + targetUrl, requestOptions)
    .then((blob) => blob.json())
    .then((data) => {
      data.forEach((r) => {
      
      });
      return data;
    })
    .catch((e) => {
      console.log(e);
      return e;
    });


  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination pagination-lg justify-content-center">
          <li className="page-item">
            <a
              className="page-link"
              href="/#"
              tabIndex="-1"
              onClick={prevPage}
            >
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/#">
              3
            </a>
          </li> 
          <li className="page-item">
            <a className="page-link" href="/#" onClick={nextPage}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
