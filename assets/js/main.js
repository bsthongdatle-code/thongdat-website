document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? '×' : '☰';
  });

  // Study library: category filter + text search.
  const search = document.querySelector('#library-search');
  const cards = [...document.querySelectorAll('.resource-card')];
  const filterButtons = [...document.querySelectorAll('.filter-btn')];
  let activeFilter = 'all';
  function updateResources() {
    const query = (search?.value || '').trim().toLocaleLowerCase('vi');
    let visible = 0;
    cards.forEach(card => {
      const matchesCategory = activeFilter === 'all' || card.dataset.category === activeFilter;
      const matchesText = (card.dataset.title + ' ' + card.textContent).toLocaleLowerCase('vi').includes(query);
      const show = matchesCategory && matchesText;
      card.hidden = !show;
      if (show) visible++;
    });
    const empty = document.querySelector('#empty-state');
    if (empty) empty.hidden = visible !== 0;
  }
  search?.addEventListener('input', updateResources);
  filterButtons.forEach(btn => btn.addEventListener('click', () => {
    activeFilter = btn.dataset.filter;
    filterButtons.forEach(item => item.classList.toggle('active', item === btn));
    updateResources();
  }));

  // Resource detail dialog.
  const detailDialog = document.querySelector('#detail-dialog');
  document.querySelectorAll('.resource-open').forEach(btn => btn.addEventListener('click', () => {
    const content = document.querySelector('#dialog-content');
    if (content) content.textContent = btn.dataset.detail || '';
    detailDialog?.showModal();
  }));
  document.querySelector('.dialog-close')?.addEventListener('click', () => detailDialog?.close());
  document.querySelector('.dialog-ok')?.addEventListener('click', () => detailDialog?.close());

  // Local image preview gallery. Files remain on the visitor's device.
  const upload = document.querySelector('#photo-upload');
  const gallery = document.querySelector('#gallery-grid');
  const lightbox = document.querySelector('#lightbox');
  const lightboxImage = document.querySelector('#lightbox-image');
  const caption = document.querySelector('#lightbox-caption');
  const photos = [];
  let current = 0;
  function showPhoto(index) {
    if (!photos.length) return;
    current = (index + photos.length) % photos.length;
    lightboxImage.src = photos[current].url;
    lightboxImage.alt = photos[current].name;
    caption.textContent = `${photos[current].name} · ${current + 1}/${photos.length}`;
  }
  function renderGallery() {
    if (!gallery) return;
    gallery.innerHTML = '';
    if (!photos.length) {
      gallery.innerHTML = '<div class="gallery-empty"><span>♡</span><h3>Những khoảnh khắc đang chờ được lưu giữ</h3><p>Chọn ảnh từ thiết bị để bắt đầu bộ sưu tập.</p></div>';
      return;
    }
    photos.forEach((photo, index) => {
      const item = document.createElement('div');
      item.className = 'gallery-item';
      const img = document.createElement('img');
      img.src = photo.url; img.alt = photo.name; img.loading = 'lazy';
      const remove = document.createElement('button');
      remove.className = 'remove-photo'; remove.type = 'button'; remove.textContent = '×';
      remove.setAttribute('aria-label', 'Xóa ảnh khỏi bản xem trước');
      remove.addEventListener('click', event => {
        event.stopPropagation();
        URL.revokeObjectURL(photo.url);
        photos.splice(index, 1);
        renderGallery();
      });
      item.append(img, remove);
      item.addEventListener('click', () => { showPhoto(index); lightbox?.showModal(); });
      gallery.append(item);
    });
  }
  upload?.addEventListener('change', () => {
    [...upload.files].filter(file => file.type.startsWith('image/')).forEach(file => {
      photos.push({ name: file.name, url: URL.createObjectURL(file) });
    });
    renderGallery();
    upload.value = '';
  });
  document.querySelector('.lightbox .dialog-close')?.addEventListener('click', () => lightbox?.close());
  document.querySelector('.lightbox-prev')?.addEventListener('click', () => showPhoto(current - 1));
  document.querySelector('.lightbox-next')?.addEventListener('click', () => showPhoto(current + 1));
  lightbox?.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });
  document.addEventListener('keydown', event => {
    if (!lightbox?.open) return;
    if (event.key === 'ArrowLeft') showPhoto(current - 1);
    if (event.key === 'ArrowRight') showPhoto(current + 1);
  });
});