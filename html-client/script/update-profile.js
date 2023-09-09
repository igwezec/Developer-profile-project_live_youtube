const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const about = document.getElementById('about');
const website = document.getElementById('website');
const form = document.querySelector('.add-profile-form');
const successModal = document.querySelector('.success-Modal');
const progressModal = document.querySelector('.progress-Modal');

const urlParams = window.location.search;
const id = new URLSearchParams(urlParams).get('id');


async function handleGetProfile() {
    const url = `https://developer-profiles-project-live-youtube.onrender.com/api/v1/profiles/get-profile/${id}`;
    const response = await fetch(url);
    const profileToUpdate = await response.json();

    if (
        profileToUpdate &&
        profileToUpdate.responseMessage === 'profile fetched successfully'
    ) {
        fullName = fullName.value;
        email = email.value;
        about = about.value;
        website = website.value;
    } else {
        alert("The requested profile could not ne fetched, please check your network and try again")
    }

    
}

handleGetProfile();

async function handleUpdateProfile(e) {
    e.preventDefault()
    progressModal.Style.display = 'block';

    const update = {
        fullName: fullName.value,
        email: email.value,
        about: about.value,
        website: website.value
    };

    const updatedprofile = await axios.patch(
       ` https://developer-profile-project-live-youtube.onrender.com/api/v1/profiles/update-profile/${id}`, update

    )


if ( updatedprofile && updatedprofile.data.responseMessage === "profile updated successfully") {
    progressModal.style.display = 'none';
    successModal.style.display =  'block';
    setTimeout(() => {
        successModal.style.display = 'none';
        window.location.href = '../index.html';
    }, 2000);
    
}

}
form.addEventListener('submit', handleUpdateProfile);   