const items = document.querySelectorAll('.menu-item');

items.forEach(item => {
  const toggle = () => {
    const detail = item.querySelector('.dish-details');
    const isHidden = detail.classList.contains('hidden');

    document.querySelectorAll('.dish-details').forEach(d => d.classList.add('hidden'));

    if (isHidden) {
      detail.classList.remove('hidden');
    }
  };

  item.querySelector('.dish-thumb').addEventListener('click', toggle);
});