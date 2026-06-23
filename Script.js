/ ========== MOCK DATA ========== /
const topicsData = [
    { name: 'Mathematics', count: '2,500+', icon: 'ðŸ“' },
    { name: 'Science', count: '1,800+', icon: 'ðŸ”¬' },
    { name: 'History', count: '1,200+', icon: 'ðŸ“œ' },
    { name: 'Geography', count: '900+', icon: 'ðŸŒ' },
    { name: 'Current Affairs', count: '3,000+', icon: 'ðŸ“°' },
    { name: 'English', count: '2,100+', icon: 'ðŸ“–' },
    { name: 'Computer Knowledge', count: '1,500+', icon: 'ðŸ’»' },
    { name: 'Reasoning', count: '1,700+', icon: 'ðŸ§ ' },
];

const mockTestsData = [
    { title: 'UPSC Prelims Mock', duration: '2h', questions: '100 Qs', difficulty: 'hard' },
    { title: 'SSC CGL Tier 1', duration: '1h', questions: '100 Qs', difficulty: 'medium' },
    { title: 'Bank PO Practice', duration: '1h', questions: '100 Qs', difficulty: 'medium' },
    { title: 'JEE Main Mock', duration: '3h', questions: '90 Qs', difficulty: 'hard' },
    { title: 'NEET Practice', duration: '3h', questions: '180 Qs', difficulty: 'hard' },
    { title: 'CAT Mock', duration: '2h', questions: '100 Qs', difficulty: 'hard' },
];

const leaderboardData = [
    { rank: 1, name: 'Ananya Sharma', exam: 'UPSC', score: '98.5%' },
    { rank: 2, name: 'Rohan Verma', exam: 'JEE', score: '97.2%' },
    { rank: 3, name: 'Priya Nair', exam: 'SSC', score: '96.8%' },
    { rank: 4, name: 'Vikram Singh', exam: 'Bank PO', score: '95.1%' },
    { rank: 5, name: 'Sneha Gupta', exam: 'NEET', score: '94.7%' },
];

const testimonialsData = [
    { quote: 'Mockly transformed my prep. Timed tests were a game changer.', author: 'Ananya S.', role: 'UPSC Aspirant', stars: 5 },
    { quote: 'Topicâ€‘wise practice helped me focus on weak areas effectively.', author: 'Rohan V.', role: 'SSC CGL', stars: 5 },
    { quote: 'Clean interface and instant results keep me motivated daily.', author: 'Priya N.', role: 'Bank PO', stars: 4 },
];

/ ========== RENDER FUNCTIONS ========== /
function renderTopics(data = topicsData) {
    const grid = document.getElementById('topicsGrid');
    grid.innerHTML = data.map(t => `
        <div class="topic-card fade-up">
            <h3>${t.icon} ${t.name}</h3>
            <div class="topic-meta"><span class="dot"></span> ${t.count} questions</div>
            <button class="btn btn-outline">Start Practice</button>
        </div>
    `).join('');
    observeFadeElements();
}

function renderMockTests() {
    document.getElementById('mocktestsGrid').innerHTML = mockTestsData.map(t => `
        <div class="mocktest-card fade-up">
            <span class="difficulty ${t.difficulty}">${t.difficulty}</span>
            <h3>${t.title}</h3>
            <div class="mocktest-details"><span>â± ${t.duration}</span><span>ðŸ“ ${t.questions}</span></div>
            <button class="btn btn-primary">Take Test</button>
        </div>
    `).join('');
    observeFadeElements();
}

function renderLeaderboard() {
    document.getElementById('leaderboardBody').innerHTML = leaderboardData.map(e => {
        let rankHtml = e.rank;
        if (e.rank <= 3) rankHtml = â€œ<span class="rank-badge rank-${e.rank}">${e.rank}</span>â€;
        return â€œ<tr><td class="rank">${rankHtml}</td><td>${e.name}</td><td>${e.exam}</td><td class="score-highlight">${e.score}</td></tr>â€;
    }).join('');
}

function renderTestimonials() {
    document.getElementById('testimonialsGrid').innerHTML = testimonialsData.map(t => `
        <div class="testimonial-card fade-up">
            <div class="stars">${'â˜…'.repeat(t.stars)}${'â˜†'.repeat(5-t.stars)}</div>
            <p class="quote">"${t.quote}"</p>
            <p class="author">${t.author}</p>
            <p class="author-role">${t.role}</p>
        </div>
    `).join('');
    observeFadeElements();
}

/ Fade-in animation observer /
function observeFadeElements() {
    const fadeEls = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -20px 0px' });
    fadeEls.forEach(el => observer.observe(el));
}

/ ========== SEARCH ========== /
document.getElementById('searchInput').addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    const filtered = q ? topicsData.filter(t => t.name.toLowerCase().includes(q)) : topicsData;
    renderTopics(filtered);
    document.getElementById('noResults').classList.toggle('visible', filtered.length === 0 && q !== '');
});

/ ========== MOBILE MENU ========== /
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
    });
});

/ ========== MODAL ========== /
const modalOverlay = document.getElementById('modalOverlay');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const switchToSignup = document.getElementById('switchToSignup');
const switchToLogin = document.getElementById('switchToLogin');
const modalClose = document.getElementById('modalClose');

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
modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });

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

/ ========== SPINNER ========== /
const spinner = document.getElementById('spinnerOverlay');
function showSpinner() { spinner.classList.add('open'); spinner.setAttribute('aria-hidden', 'false'); }
function hideSpinner() { spinner.classList.remove('open'); spinner.setAttribute('aria-hidden', 'true'); }

/ ========== FIREBASE AUTH ========== /
const loginSubmit = document.getElementById('loginSubmit');
const signupSubmit = document.getElementById('signupSubmit');
const googleLoginBtn = document.getElementById('googleLoginBtn');
const googleSignupBtn = document.getElementById('googleSignupBtn');

// Helper: store user profile in Firestore
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

// Open modal from nav/mobile buttons
document.getElementById('btnLogin').addEventListener('click', () => { if (!auth.currentUser) openModal(false); else auth.signOut(); });
document.getElementById('btnSignup').addEventListener('click', () => openModal(true));
document.getElementById('btnLoginMobile').addEventListener('click', () => { if (!auth.currentUser) openModal(false); else auth.signOut(); });
document.getElementById('btnSignupMobile').addEventListener('click', () => openModal(true));

// Auth state observer â€“ update UI
auth.onAuthStateChanged(user => {
    const desktopLogin = document.getElementById('btnLogin');
    const desktopSignup = document.getElementById('btnSignup');
    const mobileLogin = document.getElementById('btnLoginMobile');
    const mobileSignup = document.getElementById('btnSignupMobile');
    if (user) {
        desktopLogin.textContent = 'Logout';
        desktopLogin.classList.add('nav-btn-login'); // ensure it looks like outline
        desktopSignup.style.display = 'none';
        mobileLogin.textContent = 'Logout';
        mobileSignup.style.display = 'none';
    } else {
        desktopLogin.textContent = 'Login';
        desktopLogin.classList.remove('nav-btn-login'); // revert
        desktopSignup.style.display = 'inline-flex';
        mobileLogin.textContent = 'Login';
        mobileSignup.style.display = 'block';
    }
});

/ ========== INITIAL RENDER ========== /
renderTopics();
renderMockTests();
renderLeaderboard();
renderTestimonials();
observeFadeElements();
