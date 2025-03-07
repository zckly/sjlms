// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize the application
  initApp();
});

/**
 * Initialize the application
 */
function initApp() {
  console.log("Application initialized");

  // Initialize accordions for topics section
  initTopicAccordions();
}

/**
 * Initialize accordion functionality for the topics section
 */
function initTopicAccordions() {
  const topicItems = document.querySelectorAll(".topic-item");

  topicItems.forEach((item) => {
    const header = item.querySelector(".topic-header");

    if (header) {
      header.addEventListener("click", function () {
        // Toggle the active class on the topic item
        item.classList.toggle("active");

        // If we want to close other open accordions when opening a new one,
        // uncomment the following code:
        /*
                if (item.classList.contains('active')) {
                    topicItems.forEach(otherItem => {
                        if (otherItem !== item && otherItem.classList.contains('active')) {
                            otherItem.classList.remove('active');
                        }
                    });
                }
                */
      });
    }
  });
}
