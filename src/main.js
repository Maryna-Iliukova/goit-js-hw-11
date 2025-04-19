import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', async e => {
  e.preventDefault();
  const query = e.target.elements['text'].value.trim();

  if (!query) {
    iziToast.warning({ message: 'Enter search term!' });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const { data } = await getImagesByQuery(query);
    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      createGallery(data.hits);
    }
  } catch (err) {
    iziToast.error({ message: 'Error fetching images.' });
  } finally {
    hideLoader();
    form.reset();
  }
});
