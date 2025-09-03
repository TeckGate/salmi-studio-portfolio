document.addEventListener('DOMContentLoaded', function() {

    // نحن لم نضف بطاقات الأعمال بعد، لذلك هذا الكود لن يجدها
    // سنقوم بتفعيله في المرحلة القادمة بعد إضافة قسم الأعمال
    // const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    const modal = document.getElementById('portfolio-modal');
    const closeModalBtn = document.getElementById('modal-close-btn');

    // هذه دالة تجريبية لفتح النافذة مؤقتًا
    // يمكنك استدعاؤها من الكونسول في المتصفح بكتابة testOpenModal()
    window.testOpenModal = function() {
        if (modal) {
            modal.classList.remove('hidden');
        }
    }

    function closeModal() {
        if (modal) {
            modal.classList.add('hidden');
        }
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
