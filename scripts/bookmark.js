export function manageBookmarkButton() {
  bookmarkButtonActive.classList.remove('hidden');
  bookmarkButton.classList.add('hidden');

  homeButton.classList.remove('hidden');
  createButton.classList.remove('hidden');
  profileButton.classList.remove('hidden');

  homeButtonActive.classList.add('hidden');
  createButtonActive.classList.add('hidden');
  profileButtonActive.classList.add('hidden');

  home.classList.add('hidden');
  bookmark.classList.remove('hidden');
  create.classList.add('hidden');
  profile.classList.add('hidden');
}
