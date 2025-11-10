document.addEventListener("DOMContentLoaded", () => {

    // === Активен линк во навигација ===
    const current = location.pathname.split("/").pop();
    document.querySelectorAll("nav a").forEach(a => {
        if (a.getAttribute("href") === current) a.classList.add("active");
    });

    // === Fade-in ефект за елементи при скрол ===
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll("h1, p, img").forEach(el => observer.observe(el));

    // === Темен/светол режим ===
    const btn = document.createElement("button");
    btn.textContent = "🌓";
    btn.style.position = "fixed";
    btn.style.bottom = "20px";
    btn.style.right = "20px";
    btn.style.fontSize = "22px";
    btn.style.padding = "8px 12px";
    btn.style.borderRadius = "50%";
    btn.style.background = "#f00";
    btn.style.color = "#fff";
    btn.style.border = "none";
    btn.style.cursor = "pointer";
    btn.style.zIndex = "999";
    document.body.appendChild(btn);

    function setTheme(mode) {
        document.documentElement.setAttribute("data-theme", mode);
        localStorage.setItem("theme", mode);
    }

    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);

    btn.addEventListener("click", () => {
        const mode = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        setTheme(mode);
    });

    // === Back to top копче ===
    const topBtn = document.createElement("button");
    topBtn.textContent = "↑";
    Object.assign(topBtn.style, {
        position: "fixed",
        bottom: "80px",
        right: "20px",
        padding: "8px 12px",
        borderRadius: "50%",
        fontSize: "20px",
        border: "none",
        background: "#333",
        color: "#fff",
        cursor: "pointer",
        display: "none",
        zIndex: "999"
    });
    document.body.appendChild(topBtn);

    window.addEventListener("scroll", () => {
        topBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });
    topBtn.addEventListener("click", () =>
        window.scrollTo({ top: 0, behavior: "smooth" })
    );
});
const elements = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
});
