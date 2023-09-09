// get form values: fullname, email, about, website 

const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const about = document.getElementById('about');
const website = document.getElementById('website');
const form = document.querySelector('.add-profile-form');
const successModal = document.querySelector('.success-Modal');
const progressModal = document.querySelector('.progress-Modal');

async function handleAddProfile(e) {
    e.preventDefault();
    progressModal.computedStyleMap.display = "block"

    const profile = {
        fullName: fullName.value,
        email: email.value,
        about: about.value,
        website: website.value,
    };
    createdProfile = await axios.post(
        'https://developer-profile-project-live-youtube.onrender.com/api/v1/profiles/create-profile',
        {fullName: fullName.value,
        email: email.value,
        about: about.value,
        website: website.value,
        }
       );
        if (createdProfile &&
            createdProfile.responseMessage === 'profile created successfully') {
        progressModal.style.display = 'none';
        successModal.style.display = 'block';  

        fullName.value = '';
        email.value = '';
        about.value ='',
        website.value ='';

        setTimeout(() => {
                successModal.style.display = 'none';
                window.location.href = '../index.html';
        }, 3000);
        }
        

}
form.addEventListener('sumbit', handleAddProfile);