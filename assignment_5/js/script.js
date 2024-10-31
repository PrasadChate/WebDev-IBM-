document.getElementById('recommendation-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const newRecommendation = document.getElementById('new-recommendation').value;
    if (newRecommendation.trim()) {
        const recommendationList = document.getElementById('recommendation-list');
        const newLi = document.createElement('li');
        newLi.textContent = newRecommendation;
        recommendationList.appendChild(newLi);

        alert('New recommendation added successfully!');
        document.getElementById('new-recommendation').value = '';
    }
});
