function togglebt(element) {
    const content = element.querySelector('.bt-content');
    const isVisible = content.style.display === 'block';
    document.querySelectorAll('.bt-content').forEach(bt => bt.style.display = 'none');
    content.style.display = isVisible ? 'none' : 'block';
}
