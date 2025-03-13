document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("hidden");
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    }, {
      threshold: 0.1,
    });
  
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  });

  document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("hidden1");
          entry.target.classList.add("show1");
        } else {
          entry.target.classList.remove("show1");
        }
      });
    }, {
      threshold: 0.1,
    });
  
    const hiddenElements = document.querySelectorAll(".hidden1");
    hiddenElements.forEach((el) => observer.observe(el));
  });

  document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("hidden2");
          entry.target.classList.add("show1");
        } else {
          entry.target.classList.remove("show1");
        }
      });
    }, {
      threshold: 0.1,
    });
  
    const hiddenElements = document.querySelectorAll(".hidden2");
    hiddenElements.forEach((el) => observer.observe(el));
  });

  document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("hidden3");
          entry.target.classList.add("show1");
        } else {
          entry.target.classList.remove("show1");
        }
      });
    }, {
      threshold: 0.1,
    });
  
    const hiddenElements = document.querySelectorAll(".hidden3");
    hiddenElements.forEach((el) => observer.observe(el));
  });

  document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("hidden4");
          entry.target.classList.add("show1");
        } else {
          entry.target.classList.remove("show1");
        }
      });
    }, {
      threshold: 0.1,
    });
  
    const hiddenElements = document.querySelectorAll(".hidden4");
    hiddenElements.forEach((el) => observer.observe(el));
  });

  