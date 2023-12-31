//global variables

const modalOverlay = document.getElementById('modalOverlay');
const confirmDeleteProfileButton = document.getElementById('confirmDeleteProfileButton');
const cancelDeleteProfileButton = document.getElementById('cancelDeleteProfileButton');
const cardsWrapper = document.getElementById('ProfileCardsWrapper');

//global variable to store the id of the profile that is being deleted
let profileId = null;
const url = `https://developer-profile-project-live-youtube.onrender.com/api/v1/profiles/get-all-profiles`;

const handleFetchData = async () => {
    const response = await fetch (url);
    const fetchedData = await response.json();

    console.log(fetchedData);

    if (fetchedData && fetchedData.responseMessage === "profile fetched sucessfully") {
        return fetchedData;
    } else{
        return(cardsWrapper.innerHTML = `<p
        class="my-40 text-center text-gray-400 text-[20px] mx-auto">
        Developer profile could not be fetched, please check your network and try again
        </p>`);
    }
};

async function handleGetProfiles() {
    const profilesCount = document.getElementById('profilesCountWrapper');

    const profilesData = await handleFetchData();
    
    if (profilesData.profilesCount <1) {
        return(cardsWrapper.innerHTML = `<p class:"my-40 text-center text-gray-400 text-[20px] mx-auto">
        No developer profile found please add some</p>`);
    }
    if (profilesData.profilesCount >0) {
        const profiles = profileData.profiles.map(
            (each) => {
                const avatarAlphabet = each.fullName.slice(0, 1).toUpperCase();

                const {website, email, fullName, about, _id} = each;
                return`<div class="card">
          <section avatar-and-bio-section>
            <div class="avatar-section flex justify-between">
              <div
                class="avatar bg-pink-200 pt-[9px] pb-[7px] px-[14px] rounded-full w-[50px] h-[50px] font-bold text-3xl text-center">
                ${avatarAlphabet}
              </div>
              <div class="flex gap-6 items-center">
                <a href="./pages/update-profile.html"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6">
                    <path
                      d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                    <path
                      d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" /></svg
                ></a>

                <div class="delete-profile-icon">
                  <img
                    src="./assests/image/icons8-delete-100.png"
                    class="w-[25px] cursor-pointer"
                    alt="delete-profile-icon" "data-id= ${_id} />
                </div>
              </div>
            </div>
            <div class="bio-section flex flex-col gap-3 mt-4">
              <div class="Developer-name text-xl font-bold">
                ${fullName}
              </div>
              <div class="Developer-bio">
                ${about}
              </div>
            </div>
          </section>
          <section class="contacts-section">
            <div class="flex gap-4 mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5 h-5 text-gray-400">
                <path
                  d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path
                  d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>

              <a
                href="mailto:${email}"
                class="font-bold text-blue-900 hover:text-blue-500 hover:underline"
                >${email}</a
              >
            </div>
            <div class="flex gap-4 mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5 h-5 text-gray-400">
                <path
                  d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
              </svg>
              <a
                href="https:${website}"
                class="font-bold text-blue-900 hover:text-blue-500 hover:underline"
                >https:${website}</a
              >
            </div>
          </section>
        </div>`;
                  
            });
              cardsWrapper.innerHTML = profiles.join("");
                    profilesCount.innerHTML = profilesData.profilesCount;

    }

}
handleGetProfiles();

async function handleShowOverlay() {
    const showOverlayButtons = document.querySelectorAll(
        `delete-profile-icon`
    );  

    showOverlayButtons.forEach(
        (each) => {
            each.addEventListener('click',(e) => {
              modalOverlay.style.display = "flex"
              profileId = e.target/dataset.id
            });
        });

}
handleShowOverlay();

function handleConfirmDeleteProfile() {
  modalOverlay.style.display = 'none';
}
confirmDeleteProfileButton.addEventListener('click', handleConfirmDeleteprofile);

async function handleConfirmDeleteProfile() {
   await axios.delete(
    'https://developer-profile-project-live-youtube.onrender.com/api/v1/profiles/delete-profile/${profileId}'
  )
  // console.log(deletedProfile)

  modalOverlay.style.display = 'none';
  handleGetProfiles();
  
}
confirmDeleteProfileButton.addEventListener('click', handleConfirmDeleteProfile)
