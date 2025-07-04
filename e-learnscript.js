// Wait until the entire DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Select all main page sections
  const pages = document.querySelectorAll(".page");

  // Select all navigation links
  const navLinks = document.querySelectorAll(".nav-link");

  // Button on the homepage to explore courses
  const exploreBtn = document.getElementById("exploreBtn");

  // The container where course cards will be displayed
  const courseList = document.getElementById("courseList");

  // Search input for filtering courses
  const searchInput = document.getElementById("searchInput");

  // Dummy course data to simulate real content
  const courses = [
    { title: "React for Beginners", author: "Amit", progress: 80 },
    { title: "UI/UX Design Masterclass", author: "John", progress: 60 },
    { title: "JavaScript Deep Dive", author: "Ankita", progress: 50 },
    { title: "Python for Data Science", author: "Pooja", progress: 90 }
  ];

  // Function to display a specific section/page
  const showPage = (id) => {
    pages.forEach(p => 
      p.id === id 
        ? p.classList.remove("hidden") 
        : p.classList.add("hidden")
    );
  };

  // Function to render course cards, optionally filtered by search input
  const renderCourses = (filter = "") => {
    courseList.innerHTML = ""; // Clear previous results
    const filtered = courses.filter(c => 
      c.title.toLowerCase().includes(filter.toLowerCase())
    );

    // Create a course card for each filtered course
    filtered.forEach(c => {
      const card = document.createElement("div");
      card.className = "course-card";
      card.innerHTML = `
        <h3>${c.title}</h3>
        <p>Author: ${c.author}</p>
        <progress value="${c.progress}" max="100"></progress>
      `;
      courseList.appendChild(card); // Add the card to the course list
    });
  };

  // Handle click events on navigation links
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault(); // Prevent default anchor behavior
      const target = link.getAttribute("href").slice(1); // Get the target ID
      if (target === "courses") renderCourses(); // Render courses if navigating to courses page
      showPage(target); // Show the targeted page
    });
  });

  // Handle "Explore Courses" button click
  exploreBtn.addEventListener("click", () => {
    renderCourses(); // Show all courses
    showPage("courses"); // Navigate to courses page
  });

  // Live search as user types
  searchInput.addEventListener("input", () => {
    renderCourses(searchInput.value); // Filter courses by input
    showPage("courses"); // Ensure courses page is visible
  });
});
