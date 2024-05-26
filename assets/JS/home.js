const propertyContainer = document.getElementsByClassName('property-container');
const interestedBtns = document.querySelectorAll('.interested-btn');
const ownerInfo = document.getElementsByClassName('owner-info');


for (let i = 0; i < interestedBtns.length; i++) {

    interestedBtns[i].addEventListener('click', function (e) {

        if (ownerInfo[i].style.display == 'block') {
            interestedBtns[i].style.color = 'black';
            interestedBtns[i].innerText = 'Interested';
            ownerInfo[i].style.display = 'none';
        }else{

            interestedBtns[i].style.color = 'red';
            interestedBtns[i].innerText = 'Not interested';
            ownerInfo[i].style.display = 'block';
        }

    });
}