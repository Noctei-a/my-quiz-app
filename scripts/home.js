export function manageHomeButton() {
  homeButtonActive.classList.remove('hidden');
  homeButton.classList.add('hidden');

  bookmarkButton.classList.remove('hidden');
  createButton.classList.remove('hidden');
  profileButton.classList.remove('hidden');

  bookmarkButtonActive.classList.add('hidden');
  createButtonActive.classList.add('hidden');
  profileButtonActive.classList.add('hidden');

  home.classList.remove('hidden');
  bookmark.classList.add('hidden');
  create.classList.add('hidden');
  profile.classList.add('hidden');
}
