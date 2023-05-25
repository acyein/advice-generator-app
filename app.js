const url = 'https://api.adviceslip.com/advice';
const quoteEl = document.getElementById('quote');
const btn = document.getElementById('generator');
const loader = document.getElementById('spinner');

function getAdvice() {
    // before fetching: show loader, hide quote el, disable btn
    loader.style.display = 'block';
    quoteEl.style.display = 'none';
    btn.disabled = true;

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            // take only 'advice' in API object
            let advice = data.slip.advice;
            
            // once fetched: hide loader, show quote el, make btn clickable
            loader.style.display = 'none';
            quoteEl.style.display = 'block';
            btn.disabled = false;

            // set quote in element
            return quoteEl.innerHTML = advice;
        })
        .catch(function(error) {
            console.log(error);
        });
}

// click btn to get quote
btn.addEventListener("click", getAdvice);

// on page load, get quote
getAdvice();