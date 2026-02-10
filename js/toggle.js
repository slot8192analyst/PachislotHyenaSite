document.querySelectorAll('.toggle-header').forEach(function(header) {
    header.addEventListener('click', function() {
        var item = this.closest('.toggle-item');
        item.classList.toggle('open');
    });
});
