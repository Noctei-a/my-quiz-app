export function manageCreateButton() {
  createButton.classList.add('hidden');
  createButtonActive.classList.remove('hidden');

  homeButton.classList.remove('hidden');
  bookmarkButton.classList.remove('hidden');
  profileButton.classList.remove('hidden');

  homeButtonActive.classList.add('hidden');
  bookmarkButtonActive.classList.add('hidden');
  profileButtonActive.classList.add('hidden');

  home.classList.add('hidden');
  bookmark.classList.add('hidden');
  create.classList.remove('hidden');
  profile.classList.add('hidden');
}
