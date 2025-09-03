document.addEventListener('DOMContentLoaded', function() {

    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const modal = document.getElementById('portfolio-modal');
    const closeModalBtn = document.getElementById('modal-close-btn');

    function openModal() {
        modal.classList.remove('hidden');
    }

    function closeModal() {
        modal.classList.add('hidden');
    }

    // تم تغيير الكلاس هنا ليتوافق مع الكود الجديد
    // انتبه: يجب أن نضيف كلاس .portfolio-item لكل بطاقة عمل في الـ HTML
    // سأقوم بذلك في المرحلة التالية.

    // الكود الحالي قد لا يعمل لأننا لم نملأ قسم الأعمال بعد.
    // لا تقلق، سنصلحه في الخطوة التالية.
    // الهدف الآن هو أن يختفي النص من الشاشة.

    if (portfolioItems && modal && closeModalBtn) {
        portfolioItems.forEach(item => {
            item.addEventListener('click', () => {
                openModal();
            });
        });

        closeModalBtn.addEventListener('click', closeModal);

        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });

        window.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
                closeModal();
            }
        });
    }
});

