// Get Lessons Learnt
getTenders()
async function getTenders(){
    const apiUrl = 'https://prod-05.uksouth.logic.azure.com:443/workflows/07f8eb1b1647462ea697d1d2e4e9009e/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=-p9bc9Ez0bI9l99xTbDtjsJSCByxpXRp28Apzdw6A_I';

    tendersdataArray = await fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        return data;
      })
      .catch(error => console.error('Error fetching data:', error));
      console.log(tendersdataArray);
      renderGrid_Tenders('',tendersdataArray);

  };

  document.addEventListener('DOMContentLoaded', function() {
    //const searchInput_LL = document.getElementById('search_LL');
    searchInput_TenderList.addEventListener('input', function() {
        var searchTerm_tenders = this.value;
        renderGrid_Tenders(searchTerm_tenders,tendersdataArray);
    });
  });


function renderGrid_Tenders(searchTerm,data) {
  gridContainer_TenderList.innerHTML = '';

    data.forEach(function(record) {
      if (record.Tender_Title.toLowerCase().includes(searchTerm.toLowerCase())) {
        var gridItem = document.createElement('div');
        gridItem.classList.add('grid-wideitem');
        gridItem.innerHTML = `
              <div class="grid-item">
              <h3>${record.Tender_Title}</h3>
              <div class="button-container" onclick="window.location.href='../pages/TenderQuestions.html'">
                <button type="button" class="button-1" value="${record.ID}">Click here</button>
              </div>
            </div>
          `;
          gridContainer_TenderList.appendChild(gridItem);
        }
      });

}
