// prompt('hello');
// 2f3daa5aafcd49e7acd31b79433f36f1

let newsAccordian=document.getElementById('newsAccordian');

const xhr=new XMLHttpRequest();
xhr.open('GET','https://newsapi.org/v2/top-headlines?sources=the-times-of-india&apiKey=2f3daa5aafcd49e7acd31b79433f36f1',true);
// ShadowRoot.getResponseHeader('Content-type','application/json');

xhr.onload=function(){
    if(this.status===200){
      let json= JSON.parse(this.responseText);
      let articles=json.articles
    //   console.log(articles);
    let newsHtml="";
      articles.forEach(function(element,index) {
          let news=`
    <div class="accordion accordion-flush" id="newsAccordian">
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-heading${index}">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapse${index}">
          <b style="color: crimson;">Breaking News ${index+1} : </b> ${element.title}
          </button>
        </h2>
        <div id="flush-collapse${index}" class="collapse" aria-labelledby="flush-heading${index}" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">${element.content}. <a href="${element.url}" target="_blank">Read full article here</a></div>
        </div>
      </div>
    </div>

  </div>`;

  newsHtml+=news;
      });
      newsAccordian.innerHTML=newsHtml;
    }
    else{
        console.log('Some error occured');
    }
}

xhr.send();


