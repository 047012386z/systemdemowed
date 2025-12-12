// State Management
const STATE_KEY = 'dataKeeper_v1';
let store = {
    topics: []
};

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    renderTopics();
    setupEventListeners();
});

function loadState() {
    const saved = localStorage.getItem(STATE_KEY);
    if (saved) {
        try {
            store = JSON.parse(saved);
        } catch (e) {
            console.error('Failed to load state', e);
        }
    }
}

function saveState() {
    localStorage.setItem(STATE_KEY, JSON.stringify(store));
    renderTopics(); // Re-render on save
}

// --- DOM Elements ---
const topicModal = document.getElementById('topicModal');
const viewModal = document.getElementById('viewModal');
const contentModal = document.getElementById('contentModal');
const modalOverlay = document.getElementById('modalOverlay');
const topicsGrid = document.getElementById('topicsGrid');
const emptyState = document.getElementById('emptyState');

// --- Current Context ---
let currentTopicId = null;

// --- Event Listeners ---
function setupEventListeners() {
    // Buttons
    document.getElementById('createTopicBtn').addEventListener('click', () => openModal(topicModal));

    // Forms
    document.getElementById('saveTopicBtn').addEventListener('click', handleCreateTopic);
    document.getElementById('saveContentBtn').addEventListener('click', handleAddContent);
    document.getElementById('deleteTopicBtn').addEventListener('click', handleDeleteTopic);

    // Modals
    document.querySelectorAll('[data-close]').forEach(btn => {
        btn.addEventListener('click', () => closeModal(document.getElementById(btn.dataset.close)));
    });
    modalOverlay.addEventListener('click', closeAllModals);

    // Add Content Trigger
    document.getElementById('addContentBtn').addEventListener('click', () => {
        // We stay in view modal, but open content modal on top? 
        // Or for simplicity, let's keep view modal open and just stack content modal.
        // Or temporarily hide view modal. Let's stack standardly.
        openModal(contentModal);
    });

    // Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            e.target.classList.add('active');
            document.getElementById(`tab-${e.target.dataset.tab}`).classList.add('active');
        });
    });

    // File Input
    const dropArea = document.getElementById('fileDropArea');
    const fileInput = document.getElementById('fileInput');

    dropArea.addEventListener('click', () => fileInput.click());

    dropArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropArea.style.borderColor = 'var(--primary)';
    });

    dropArea.addEventListener('dragleave', () => {
        dropArea.style.borderColor = 'var(--border)';
    });

    dropArea.addEventListener('drop', (e) => {
        e.preventDefault();
        dropArea.style.borderColor = 'var(--border)';
        if (e.dataTransfer.files.length) handleFileSelect(e.dataTransfer.files[0]);
    });

    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length) handleFileSelect(e.target.files[0]);
    });
}

// --- Core Functions ---

function handleCreateTopic() {
    const nameInput = document.getElementById('topicName');
    const descInput = document.getElementById('topicDesc');

    const name = nameInput.value.trim();
    if (!name) return alert('Please enter a topic name');

    const newTopic = {
        id: Date.now().toString(),
        name: name,
        description: descInput.value.trim(),
        createdAt: new Date().toISOString(),
        items: []
    };

    store.topics.unshift(newTopic); // Add to top
    saveState();

    // Reset and Close
    nameInput.value = '';
    descInput.value = '';
    closeModal(topicModal);
}

function renderTopics() {
    topicsGrid.innerHTML = '';

    if (store.topics.length === 0) {
        topicsGrid.style.display = 'none';
        emptyState.style.display = 'flex';
        return;
    }

    topicsGrid.style.display = 'grid';
    emptyState.style.display = 'none';

    store.topics.forEach(topic => {
        const card = document.createElement('div');
        card.className = 'topic-card';
        card.innerHTML = `
            <h3>${escapeHtml(topic.name)}</h3>
            <p>${escapeHtml(topic.description || 'No description')}</p>
            <div class="topic-meta">
                <span>${topic.items.length} Items</span>
                <span>${new Date(topic.createdAt).toLocaleDateString()}</span>
            </div>
        `;
        card.addEventListener('click', () => openTopicView(topic));
        topicsGrid.appendChild(card);
    });
}

function openTopicView(topic) {
    currentTopicId = topic.id;
    document.getElementById('viewTopicTitle').textContent = topic.name;
    document.getElementById('viewTopicDesc').textContent = topic.description;

    renderContentList(topic);
    openModal(viewModal);
}

function renderContentList(topic) {
    const list = document.getElementById('contentList');
    list.innerHTML = '';

    if (topic.items.length === 0) {
        list.innerHTML = '<p style="text-align:center;color:#666;margin-top:2rem;">No content yet.</p>';
        return;
    }

    topic.items.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'content-item';

        let contentHtml = '';
        if (item.type === 'text') {
            contentHtml = `<div class="content-text">${escapeHtml(item.data)}</div>`;
        } else if (item.type === 'file') {
            if (item.mimeType.startsWith('image/')) {
                contentHtml = `<div class="content-file"><img src="${item.data}" alt="Image"></div>`;
            } else {
                contentHtml = `<a href="${item.data}" download="${item.fileName}" class="content-file-link">
                    <i class="fa-solid fa-file-arrow-down"></i> ${escapeHtml(item.fileName)}
                </a>`;
            }
            // Add description if exists
            if (item.description) {
                contentHtml += `<div class="content-description">${escapeHtml(item.description)}</div>`;
            }
        }

        div.innerHTML = `
            ${contentHtml}
            <span class="content-date">${new Date(item.createdAt).toLocaleString()}</span>
            <button class="delete-item-btn" onclick="deleteItem('${index}')"><i class="fa-solid fa-trash"></i></button>
        `;
        list.appendChild(div);
    });
}

// Global scope for onclick
window.deleteItem = function (index) {
    if (!confirm('Delete this item?')) return;
    const topic = store.topics.find(t => t.id === currentTopicId);
    if (topic) {
        topic.items.splice(index, 1);
        saveState();
        renderContentList(topic); // Re-render just the list
    }
}

function handleDeleteTopic() {
    if (!confirm('Are you sure you want to delete this entire topic?')) return;
    store.topics = store.topics.filter(t => t.id !== currentTopicId);
    saveState();
    closeModal(viewModal);
}

// --- Content Adding ---

// Temp storage for file input
let currentFile = null;

function handleFileSelect(file) {
    // file size check (Limit to ~2MB for localStorage safety)
    if (file.size > 2 * 1024 * 1024) {
        alert('File is too large for browser storage (Max 2MB).');
        return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
        currentFile = {
            data: e.target.result,
            name: file.name,
            type: file.type
        };
        // Show preview name
        document.getElementById('filePreview').innerHTML = `<div class="file-success"><i class="fa-solid fa-check"></i> ${file.name} ready</div>`;
    };
    reader.readAsDataURL(file);
}

function handleAddContent() {
    const topic = store.topics.find(t => t.id === currentTopicId);
    if (!topic) return;

    const activeTab = document.querySelector('.tab-btn.active').dataset.tab;

    if (activeTab === 'text') {
        const text = document.getElementById('contentText').value.trim();
        if (!text) return alert('Enter some text');

        topic.items.push({
            type: 'text',
            data: text,
            createdAt: new Date().toISOString()
        });
    } else {
        if (!currentFile) return alert('Select a file first');

        topic.items.push({
            type: 'file',
            data: currentFile.data,
            fileName: currentFile.name,
            mimeType: currentFile.type,
            description: document.getElementById('fileDesc').value.trim(),
            createdAt: new Date().toISOString()
        });
    }

    saveState();

    // Cleanup
    document.getElementById('contentText').value = '';
    currentFile = null;
    document.getElementById('filePreview').innerHTML = '';
    document.getElementById('fileInput').value = ''; // Reset input
    document.getElementById('fileDesc').value = ''; // Reset description

    closeModal(contentModal);
    renderContentList(topic); // Update view
}


// --- Modal Utils ---
function openModal(modal) {
    modalOverlay.classList.add('open');
    modal.classList.add('open');
}

function closeModal(modal) {
    modal.classList.remove('open');
    // Check if any other modal is open
    const openModals = document.querySelectorAll('.modal.open');
    if (openModals.length === 0) {
        modalOverlay.classList.remove('open');
    }
}

function closeAllModals() {
    document.querySelectorAll('.modal').forEach(m => m.classList.remove('open'));
    modalOverlay.classList.remove('open');
}

// Helper
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.innerText = text;
    return div.innerHTML;
}
