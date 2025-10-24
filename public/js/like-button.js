document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".like-button").forEach((button) => {
    button.addEventListener("click", async (event) => {
      const pieceId = event.target.dataset.pieceId;

      try {
        const response = await fetch("/api/increment-likes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ pieceId }),
        });

        const data = await response.json();
        if (response.ok) {
          // Update the UI with the new likes count
          event.target.nextElementSibling.textContent = `Likes: ${data.likes}`;
        } else {
          console.error("Error:", data.error);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    });
  });
});
