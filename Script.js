/* ========== MOCK DATA ========== */
const topicsData = [
    { name: 'Mathematics', count: '2,500+', icon: '📐' },
    { name: 'Science', count: '1,800+', icon: '🔬' },
    { name: 'History', count: '1,200+', icon: '📜' },
    { name: 'Geography', count: '900+', icon: '🌍' },
    { name: 'Current Affairs', count: '3,000+', icon: '📰' },
    { name: 'English', count: '2,100+', icon: '📖' },
    { name: 'Computer Knowledge', count: '1,500+', icon: '💻' },
    { name: 'Reasoning', count: '1,700+', icon: '🧠' },
];

const mockTestsData = [
    { title: 'UPSC Prelims Mock Test', duration: '2 Hours', questions: '100 Questions', difficulty: 'hard' },
    { title: 'SSC CGL Tier 1 Mock', duration: '1 Hour', questions: '100 Questions', difficulty: 'medium' },
    { title: 'Bank PO Practice Test', duration: '1 Hour', questions: '100 Questions', difficulty: 'medium' },
    { title: 'JEE Main Mock Test', duration: '3 Hours', questions: '90 Questions', difficulty: 'hard' },
    { title: 'NEET Practice Exam', duration: '3 Hours', questions: '180 Questions', difficulty: 'hard' },
    { title: 'CAT Mock Test', duration: '2 Hours', questions: '100 Questions', difficulty: 'hard' },
];

const leaderboardData = [
    { rank: 1, name: 'Ananya Sharma', exam: 'UPSC Prelims', score: '98.5%' },
    { rank: 2, name: 'Rohan Verma', exam: 'JEE Main', score: '97.2%' },
    { rank: 3, name: 'Priya Nair', exam: 'SSC CGL', score: '96.8%' },
    { rank: 4, name: 'Vikram Singh', exam: 'Bank PO', score: '95.1%' },
    { rank: 5, name: 'Sneha Gupta', exam: 'NEET', score: '94.7%' },
    { rank: 6, name: 'Arjun Reddy', exam: 'CAT', score: '93.3%' },
    { rank: 7, name: 'Kavita Joshi', exam: 'UPSC Prelims', score: '92.9%' },
    { rank: 8, name: 'Mohammed Ali', exam: 'SSC CGL', score: '91.5%' },
    { rank: 9, name: 'Deepika Patel', exam: 'Bank PO', score: '90.8%' },
    { rank: 10, name: 'Rahul Kumar', exam: 'JEE Main', score: '89.6%' },
];

const testimonialsData = [
    {
        quote: 'Mockly transformed my exam preparation. The timed tests helped me manage my time better during the actual UPSC prelims. Highly recommended!',
        author: 'Ananya Sharma',
        role: 'UPSC Aspirant',
        stars: 5,
    },
    {
        quote: 'The topic-wise practice feature is excellent. I was able to identify my weak areas in Reasoning and focus on improving them systematically.',
        author: 'Rohan Verma',
        role: 'SSC CGL Candidate',
        stars: 5,
    },
    {
        quote: 'Clean interface, relevant questions, and instant results make Mockly my go-to platform for daily practice. The leaderboard keeps me motivated!',
        author: 'Priya Nair',
        role: 'Bank PO Aspirant',
        stars: 4,
    },
];

/* ========== DOM REFERENCES ========== */
const topicsGrid = document.getElementById('topicsGrid');
const mocktestsGrid = document.getElementById('mocktestsGrid');
const leaderboardBody = document.getElementById('leaderboardBody');
const testimonialsGrid = document.getElementById('testimonialsGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const noResults = document.getElementById('noResults');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const switchToSignup = document.getElementById('switchToSignup');
const switchToLogin = document.getElementById('switchToLogin');
const spinnerOverlay = document.getElementById('spinnerOverlay');

// Buttons
const loginSubmit = document.getElementById('loginSubmit');
const signupSubmit = document.getElementById('signupSubmit');
const googleLoginBtn = document.getElementById('googleLoginBtn');
const googleSignupBtn = document.getElementById('googleSignupBtn');
const navLoginBtn = document.getElementById('btnLogin');
const navSignupBtn = document.getElementById('btnSignup');
const mobileLoginBtn = document.getElementById('btnLoginMobile');
const mobileSignupBtn = document.getElementById('btnSignupMobile');

/* ========== RENDER FUNCTIONS ========== */
function renderTopics(data) {
    topicsGrid.innerHTML = '';
    if (data.length === 0) {
        noResults.classList.add('visible');
    } else {
        noResults.classList.remove('visible');
    }
    data.forEach(topic => {
        const card = document.createElement('div');
        card.className = 'topic-card';
        card.innerHTML = `
            <h3>${topic.icon ? topic.icon + ' ' : ''}${topic.name}</h3>
            <div class="topic-meta">
                <span class="dot" aria-hidden="true"></span>
                <span>${topic.count} questions</span>
            </div>
            <button class="btn btn-outline" aria-label="Start practice for ${topic.name}">Start Practice</button>
        `;
        topicsGrid.appendChild(card);
    });
}

function renderMockTests() {
    mocktestsGrid.innerHTML = '';
    mockTestsData.forEach(test => {
        const card = document.createElement('div');
        card.className = 'mocktest-card';
        const diffLabel = test.difficulty.charAt(0).toUpperCase() + test.difficulty.slice(1);
        card.innerHTML = `
            <span class="difficulty ${test.difficulty}">${diffLabel}</span>
            <h3>${test.title}</h3>
            <div class="mocktest-details">
                <span>⏱ ${test.duration}</span>
                <span>📝 ${test.questions}</span>
            </div>
            <button class="btn btn-primary" aria-label="Start ${test.title}">Take Test</button>
        `;
        mocktestsGrid.appendChild(card);
    });
}

function renderLeaderboard() {
    leaderboardBody.innerHTML = '';
    leaderboardData.forEach(entry => {
        const tr = document.createElement('tr');
        let rankHTML = '';
        if (entry.rank === 1) {
            rankHTML = '<span class="rank-badge rank-1">1</span>';
        } else if (entry.rank === 2) {
            rankHTML = '<span class="rank-badge rank-2">2</span>';
        } else if (entry.rank === 3) {
            rankHTML = '<span class="rank-badge rank-3">3</span>';
        } else {
            rankHTML = entry.rank;
        }
        tr.innerHTML = `
            <td class="rank">${rankHTML}</td>
            <td>${entry.name}</td>
            <td>${entry.exam}</td>
            <td class="score-highlight">${entry.score}</td>
        `;
        leaderboardBody.appendChild(tr);
    });
}

function renderTestimonials() {
    testimonialsGrid.innerHTML = '';
    testimonialsData.forEach(t => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        const starsStr = '★'.repeat(t.stars) + '☆'.repeat(5 - t.stars);
        card.innerHTML = `
            <div class="stars" aria-label="${t.stars} out of 5 stars">${starsStr}</div>
            <p class="quote">"${t.quote}"</p>
            <p class="author">${t.author}</p>
            <p class="author-role">${t.role}</p>
        `;
        testimonialsGrid.appendChild(card);
    });
}

/* ========== SEARCH FUNCTIONALITY ========== */
function filterTopics() {
    const query = searchInput.value.trim().toLowerCase();
    if (query === '') {
        renderTopics(topicsData);
        return;
    }
    const filtered = topicsData.filter(topic =>
        topic.name.toLowerCase().includes(query)
    );
    renderTopics(filtered);
}

searchInput.addEventListener('input', filterTopics);
searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    filterTopics();
    document.getElementById('topics').scrollIntoView({ behavior: 'smooth' });
});
searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        filterTopics();
        document.getElementById('topics').scrollIntoView({ behavior: 'smooth' });
    }
});

/* ========== MOBILE MENU ========== */
function openMobileMenu() {
    mobileMenu.classList.add('open');
    hamburger.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
}
function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
}
function toggleMobileMenu() {
    if (mobileMenu.classList.contains('open')) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

hamburger.addEventListener('click', toggleMobileMenu);

mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        closeMobileMenu();
    });
});
mobileMenu.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        closeMobileMenu();
        // If it's a login/signup button, also open modal
        if (btn.id === 'btnLoginMobile' || btn.id === 'btnSignupMobile') {
            const isSignup = btn.id === 'btnSignupMobile';
            openModal(isSignup);
        }
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        closeMobileMenu();
        hamburger.focus();
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024 && mobileMenu.classList.contains('open')) {
        closeMobileMenu();
    }
});

/* ========== MODAL LOGIC ========== */
function openModal(showSignup = false) {
    modalOverlay.classList.add('open');
    modalOverlay.setAttribute('aria-hidden', 'false');
    if (showSignup) {
        loginForm.classList.add('form-hidden');
        signupForm.classList.remove('form-hidden');
    } else {
        signupForm.classList.add('form-hidden');
        loginForm.classList.remove('form-hidden');
    }
    document.body.style.overflow = 'hidden';
    const visibleForm = showSignup ? signupForm : loginForm;
    const firstInput = visibleForm.querySelector('input');
    if (firstInput) setTimeout(() => firstInput.focus(), 100);
}

function closeModal() {
    modalOverlay.classList.remove('open');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('open')) closeModal();
});

/* ========== SPINNER ========== */
function showSpinner() {
    spinnerOverlay.classList.add('open');
    spinnerOverlay.setAttribute('aria-hidden', 'false');
}
function hideSpinner() {
    spinnerOverlay.classList.remove('open');
    spinnerOverlay.setAttribute('aria-hidden', 'true');
}

/* ========== FIREBASE AUTH ========== */

// Helper: create user profile in Firestore
async function createUserProfile(user, additionalData = {}) {
    try {
        await db.collection('users').doc(user.uid).set({
            email: user.email,
            displayName: user.displayName || additionalData.displayName || '',
            photoURL: user.photoURL || '',
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            ...additionalData
        }, { merge: true });
    } catch (error) {
        console.error('Error creating user profile:', error);
    }
}

// Email/Password Login
loginSubmit.addEventListener('click', async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    if (!email || !password) return alert('Please fill in all fields.');

    showSpinner();
    try {
        await auth.signInWithEmailAndPassword(email, password);
        closeModal();
        document.getElementById('loginEmail').value = '';
        document.getElementById('loginPassword').value = '';
    } catch (error) {
        alert('Login failed: ' + error.message);
    } finally {
        hideSpinner();
    }
});

// Email/Password Signup
signupSubmit.addEventListener('click', async (e) => {
    e.preventDefault();
    const name = document.getElementById('signupName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value;
    if (!name || !email || !password) return alert('Please fill in all fields.');
    if (password.length < 6) return alert('Password must be at least 6 characters.');

    showSpinner();
    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        await userCredential.user.updateProfile({ displayName: name });
        await createUserProfile(userCredential.user, { displayName: name });
        closeModal();
        document.getElementById('signupName').value = '';
        document.getElementById('signupEmail').value = '';
        document.getElementById('signupPassword').value = '';
    } catch (error) {
        alert('Signup failed: ' + error.message);
    } finally {
        hideSpinner();
    }
});

// Google Sign-In
async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    showSpinner();
    try {
        const result = await auth.signInWithPopup(provider);
        if (result.additionalUserInfo?.isNewUser) {
            await createUserProfile(result.user);
        }
        closeModal();
    } catch (error) {
        if (error.code !== 'auth/popup-closed-by-user') {
            alert('Google sign-in failed: ' + error.message);
        }
    } finally {
        hideSpinner();
    }
}

googleLoginBtn.addEventListener('click', signInWithGoogle);
googleSignupBtn.addEventListener('click', signInWithGoogle);

// Modal open buttons (nav)
navLoginBtn.addEventListener('click', () => {
    if (auth.currentUser) {
        auth.signOut();
    } else {
        openModal(false);
    }
});
navSignupBtn.addEventListener('click', () => openModal(true));
mobileLoginBtn.addEventListener('click', () => {
    if (auth.currentUser) {
        auth.signOut();
    } else {
        openModal(false);
    }
});
mobileSignupBtn.addEventListener('click', () => openModal(true));

// Toggle between login and signup
switchToSignup.addEventListener('click', () => {
    loginForm.classList.add('form-hidden');
    signupForm.classList.remove('form-hidden');
    document.getElementById('signupName').focus();
});
switchToLogin.addEventListener('click', () => {
    signupForm.classList.add('form-hidden');
    loginForm.classList.remove('form-hidden');
    document.getElementById('loginEmail').focus();
});

// Auth state observer – update UI when user logs in/out
auth.onAuthStateChanged(user => {
    const loginBtn = document.getElementById('btnLogin');
    const signupBtn = document.getElementById('btnSignup');
    const mobileLogin = document.getElementById('btnLoginMobile');
    const mobileSignup = document.getElementById('btnSignupMobile');

    if (user) {
        // User is signed in
        loginBtn.textContent = 'Logout';
        loginBtn.classList.add('btn-outline'); // make it look like a secondary button
        loginBtn.classList.remove('btn-primary');
        signupBtn.style.display = 'none';
        if (mobileLogin) mobileLogin.textContent = 'Logout';
        if (mobileSignup) mobileSignup.style.display = 'none';
    } else {
        // User is signed out
        loginBtn.textContent = 'Login';
        loginBtn.classList.remove('btn-outline'); // revert to original outline
        loginBtn.classList.add('btn-outline');
        signupBtn.style.display = 'inline-flex';
        if (mobileLogin) mobileLogin.textContent = 'Login';
        if (mobileSignup) mobileSignup.style.display = 'block';
    }
});

/* ========== INITIAL RENDER ========== */
function init() {
    renderTopics(topicsData);
    renderMockTests();
    renderLeaderboard();
    renderTestimonials();
}
init();

/* ========== SMOOTH SCROLL FOR ALL ANCHOR LINKS (fallback) ========== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
            if (mobileMenu.classList.contains('open')) {
                closeMobileMenu();
            }
        }
    });
});
