export function manageProfileButton() {
  profileButton.classList.add('hidden');
  profileButtonActive.classList.remove('hidden');

  homeButton.classList.remove('hidden');
  createButton.classList.remove('hidden');
  bookmarkButton.classList.remove('hidden');

  homeButtonActive.classList.add('hidden');
  createButtonActive.classList.add('hidden');
  bookmarkButtonActive.classList.add('hidden');

  home.classList.add('hidden');
  bookmark.classList.add('hidden');
  create.classList.add('hidden');
  profile.classList.remove('hidden');
}
