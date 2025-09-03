document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('portfolio-modal');
    const closeModalBtn = document.getElementById('modal-close-btn');

    // سيتم تفعيل هذا الجزء لاحقاً عندما نضيف بطاقات الأعمال
    // const portfolioItems = document.querySelectorAll('.portfolio-item');
    // portfolioItems.forEach(item => {
    //     item.addEventListener('click', () => {
    //         openModal();
    //     });
    // });

    function openModal() {
        if(modal) modal.classList.remove('hidden');
    }

    function closeModal() {
        if(modal) modal.classList.add('hidden');
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    if (modal) {
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });
    }

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });
});
