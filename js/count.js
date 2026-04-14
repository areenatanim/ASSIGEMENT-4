const jobs = [
        { id: 1, title: 'Mobile First', company: 'React Native Developer', status: 'none' },
        { id: 2, title: 'Mobile First', company: 'React Native Developer', status: 'none' },
        { id: 3, title: 'Mobile First', company: 'React Native Developer', status: 'none' },
        { id: 4, title: 'Mobile First', company: 'React Native Developer', status: 'none' },
        { id: 5, title: 'Mobile First', company: 'React Native Developer', status: 'none' },
        { id: 6, title: 'Mobile First', company: 'React Native Developer', status: 'none' },
        { id: 7, title: 'Mobile First', company: 'React Native Developer', status: 'none' },
        { id: 8, title: 'Mobile First', company: 'React Native Developer', status: 'none' }
];

function updateCounters() {
        const total = jobs.length;
        const interviews = jobs.filter(job => job.status === 'interview').length;
        const rejects = jobs.filter(job => job.status === 'reject').length;

        document.getElementById('total-btn').textContent = total;
        document.getElementById('total-interview').textContent = interviews;
        document.getElementById('total-reject').textContent = rejects;

        // Update available jobs count
        document.querySelector('p:last-of-type').textContent = `${total} jobs`;
}

function toggleStatus(jobId, newStatus) {
        const job = jobs.find(j => j.id === jobId);
        if (job) {
                job.status = job.status === newStatus ? 'none' : newStatus;
                updateJobCard(jobId);
                updateCounters();
        }
}

function updateJobCard(jobId) {
        const card = document.getElementById(`card-${jobId}`) || document.querySelector(`[onclick*="card-${jobId}"]`)?.closest('.item');
        if (!card) return;

        const job = jobs.find(j => j.id === jobId);
        if (!job) return;

        // Update badges
        const interviewBadge = card.querySelector('#interview-badge') || card.querySelector('.badge-secondary');
        const rejectBadge = card.querySelector('#reject-badge') || card.querySelector('.badge-accent');

        if (interviewBadge) {
                interviewBadge.classList.toggle('hidden', job.status !== 'interview');
                if (job.status === 'interview') {
                        interviewBadge.textContent = 'interview';
                }
        }

        if (rejectBadge) {
                rejectBadge.classList.toggle('hidden', job.status !== 'reject');
                if (job.status === 'reject') {
                        rejectBadge.textContent = 'Reject';
                }
        }
}

// Initialize counters
document.addEventListener('DOMContentLoaded', function () {
        updateCounters();

        // Add click handlers to all interview/reject buttons
        document.querySelectorAll('.btn-outline.border-green-700, .btn-accent').forEach(btn => {
                btn.addEventListener('click', function (e) {
                        e.preventDefault();
                        const card = this.closest('.item');
                        const jobId = parseInt(card.closest('[id^="card-"]')?.id.replace('card-', '') ||
                                Array.from(card.parentNode.children).indexOf(card) + 1);
                        toggleStatus(jobId, 'interview');
                });
        });

        document.querySelectorAll('.btn-outline.border-red-600, .btn-secondary').forEach(btn => {
                btn.addEventListener('click', function (e) {
                        e.preventDefault();
                        const card = this.closest('.item');
                        const jobId = parseInt(card.closest('[id^="card-"]')?.id.replace('card-', '') ||
                                Array.from(card.parentNode.children).indexOf(card) + 1);
                        toggleStatus(jobId, 'reject');
                });
        });
});

// Export for other scripts
window.count = updateCounters;
window.toggleStatus = toggleStatus;
